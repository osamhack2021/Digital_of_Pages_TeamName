import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
	res.json({ message: 'Hello from Server!' });
});

if (process.env.NODE_ENV === 'production') {
	// Have Node serve the files for our built React app
	app.use(express.static(path.resolve(__dirname, '../client/build')));
	// All other GET requests not handled before will return our React app
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
	});
}

app.listen(PORT, () => {
	console.log(`Server listening at https://osam-hackton--server.run.goorm.io/`);
});