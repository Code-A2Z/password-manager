import { Schema } from 'mongoose';

const UserSchema = Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      default: ''
    },
    storage: {
      type: String,
      default: ''
    }
  },
  {
    timeStamps: {
      createdAt: 'joinedAt',
    }
  }
);

export default UserSchema;
