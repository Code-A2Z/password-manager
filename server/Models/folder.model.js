import mongoose from 'mongoose';
import FolderSchema from '../Schemas/folder.schema';

const Folders = mongoose.model('folders', FolderSchema);

export default Folders;
