const app = require('express')();
const fs = require('fs');
const path = require('path');
const uid = require('uid2');
const mime = require('mime');
const targetPath = path.resolve(__dirname + '/images/uploaded');
const imageTypes = ['image/jpeg', 'image/png'];

module.exports = {
  upload: (req, res, next) => {
    console.log('image created');
    console.log('req.files ===', req.file);
    return res.send('created an image controller whoop whoop');
  }
}
