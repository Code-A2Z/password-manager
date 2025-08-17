import { Schema } from 'mongoose';

const FolderSchema = Schema(
  {
    folderId: {
      type: String,
      required: true,
      unique: true
    },
    folderName: {
      type: String,
      required: true,
      default: ''
    },
    folderDescription: {
      type: String,
      default: ''
    },
    files: {
      type: [Schema.Types.ObjectId],
      ref: 'files',
      default: []
    }
  },
  {
    timeStamps: {
      createdAt: 'joinedAt',
    }
  }
);

export default FolderSchema;
