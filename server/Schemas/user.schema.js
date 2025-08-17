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
    folders: {
      type: [Schema.Types.ObjectId],
      ref: 'folders',
      default: []
    }
  },
  {
    timeStamps: {
      createdAt: 'joinedAt',
    }
  }
);

export default UserSchema;
