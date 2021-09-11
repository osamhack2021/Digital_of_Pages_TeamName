import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
	name: String,
});

const Role = mongoose.model('Role', roleSchema);

export default Role;