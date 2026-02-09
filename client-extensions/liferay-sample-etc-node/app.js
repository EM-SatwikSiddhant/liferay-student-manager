/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import express from 'express';
import cors from 'cors';
import axios from 'axios';

import config from './config.js';

const app = express();
const serverPort = config['server.port'];


app.use(cors()); 
app.use(express.json());


app.get('/ready', (req, res) => {
	res.send('READY');
});


app.get('/api/students', async (req, res) => {
	try {
		console.log('Fetching students from Liferay');

		const response = await axios.get(
			`${config['liferay.url']}/o/c/studentses`,
			{
				auth: {
					username: config['liferay.username'],
					password: config['liferay.password'],
				},
			}
		);

		console.log('fetched students');
		console.log(`Found ${response.data.items?.length || 0} students`);

		res.json(response.data);
	} catch (error) {
		console.error('Error fetching students from Liferay:', error.message);
		res.status(500).json({
			error: 'Failed to fetch students from Liferay',
			details: error.message,
		});
	}
});

app.listen(serverPort, () => {
	console.log(`Student Manager Backend running on http://localhost:${serverPort}`);
});

export default app;
