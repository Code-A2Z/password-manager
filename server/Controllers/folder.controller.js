import { nanoid } from 'nanoid';

import Users from "../Models/user.model.js";
import Folders from "../Models/folder.model.js";

export const createFolder = async (req, res) => {
  let userId = req.user;
  let { folderName, folderDescription, id } = req.body;

  if (folderName === undefined || folderName === '') {
    return res.status(403).json({ error: 'Folder name is required' });
  }
  let folderId = id || folderName.replace(/[^a-zA-Z0-9]/g, ' ').replace(/\s+/g, '-').trim() + nanoid();

  if (id) {
    Folders.findOneAndUpdate({ folderId }, { folderName, folderDescription })
      .then(folder => {
        return res.status(200).json({ id: folderId });
      })
      .catch(error => {
        return res.status(500).json({ error: error.message });
      });
  } else {
    let folder = new Folders({
      folderName,
      folderDescription,
      folderId
    })

    folder.save()
      .then(folder => {
        Users.findOneAndUpdate({ _id: userId }, { $push: { "folders": folder._id } })
          .then(user => {
            return res.status(200).json({ id: folder.folderId });
          })
          .catch(error => {
            return res.status(500).json({ error: error.message });
          });
      })
      .catch(error => {
        return res.status(500).json({ error: error.message });
      });
  }
};