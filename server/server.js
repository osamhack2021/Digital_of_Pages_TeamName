import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

// middleware
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// routes
// test
app.get('/api/auth', (req, res) => {
	res.json({ message: 'Hello from Server!' });
});

if (process.env.NODE_ENV === 'production') {
	// Have Node serve the files for our built React app
	app.use(express.static(path.resolve(__dirname, './views')));
	// All other GET requests not handled before will return our React app
	app.get('/*', (req, res) => {
		res.sendFile(path.resolve(__dirname, './views', 'index.html'));
	});
}

export default app;