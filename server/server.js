const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack.config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const images = require('./images');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/uploaded')
  },
  filename: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
      cb(null, `${file.fieldname}-${Date.now()}.jpg`)
    } else if (file.mimetype === 'image/png') {
      cb(null, `${file.fieldname}-${Date.now()}.png`)
    } else {
      console.error('please upload a jpg or png image file.');
    }
  }
})

const upload = multer({ storage: storage })
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
app.use('/images', express.static(path.normalize(__dirname + '/../images/uploaded')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../client' + '/index.html'));
});

app.get('/images', images.getAll)

app.post('/image/create', upload.single('file'), images.upload)

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info(`listening on port ${port}`);
  }
});
