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

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/images/uploaded'));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../client' + '/index.html'));
});

app.post('/image/create', images.upload);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info(`listening on port ${port}`);
  }
});
