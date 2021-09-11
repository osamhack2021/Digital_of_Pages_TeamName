import "regenerator-runtime";
import 'dotenv/config'
import './db';
import Role from './models/Role';
import User from './models/User';
import app from './server';

const PORT = process.env.PORT || 3001;

// Start Server
app.listen(PORT, () => {
	console.log(`Server listening at https://osam-hackton--server.run.goorm.io/`);
});