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

app.get('/api/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Grace", "lastName": "White", "email": "grace@prodigy.com"},
    {"id": 3, "firstName": "Frankie", "lastName": "Cohen", "email": "frankie@aol.com"}
  ]);
});

app.set('port', process.env.PORT || 3000)
const server = app.listen(app.get('port'), () => {
  console.log('====================================');
  console.log(`Express running → http://localhost:${server.address().port}`);
  console.log('====================================');
})
