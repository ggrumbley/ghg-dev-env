import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.set('port', process.env.PORT || 3000)
const server = app.listen(app.get('port'), () => {
  console.log('====================================');
  console.log(`Express running → http://localhost:${server.address().port}`);
  console.log('====================================');
})
