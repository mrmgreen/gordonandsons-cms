const app = require('express')();
const fs = require('fs');
const path = require('path');
const uid = require('uid2');
const mime = require('mime');
const targetPath = path.normalize(__dirname + '/../../images/uploaded');
const imageTypes = ['image/jpeg', 'image/png'];

module.exports = {
  upload: (req, res, next) => {
    return res.send('created an image controller whoop whoop');
  },

  getAll: (req,res,next) => {
    let images = [];
    fs.readdir(targetPath, (error, files) => {
      const pattern = /jpg|jpeg|png/;
      files.forEach((file) => {
        if (pattern.test(file) === true) {
          images.push(file);
        }
      });
      res.status(200);
      return res.json(images);
    });
  },
}
