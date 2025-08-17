import { Schema } from 'mongoose';

const UserSchema = Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    folders: {
      type: [Schema.Types.ObjectId],
      ref: 'folders',
      default: []
    },
  },
  {
    timeStamps: {
      createdAt: 'joinedAt',
    }
  }
);

export default UserSchema;
