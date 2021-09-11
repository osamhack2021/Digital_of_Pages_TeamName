import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String,
	roles: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Role',
		},
	],
});

const User = mongoose.model('User', userSchema);

export default User;