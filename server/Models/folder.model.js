import mongoose from 'mongoose';
import FolderSchema from '../Schemas/folder.schema.js';

const Folders = mongoose.model('folders', FolderSchema);

export default Folders;
