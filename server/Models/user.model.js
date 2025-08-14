import mongoose from 'mongoose';
import UserSchema from '../Schemas/user.schema';

const User = mongoose.model('users', UserSchema);

export default User;
