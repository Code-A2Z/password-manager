import mongoose from 'mongoose';
import UserSchema from '../Schemas/user.schema';

const Users = mongoose.model('users', UserSchema);

export default Users;
