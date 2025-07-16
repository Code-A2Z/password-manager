import mongoose from 'mongoose';


const UserDataSchema = new mongoose.Schema({
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
});


const UserData = mongoose.model('UserData', UserDataSchema);

export default UserData;