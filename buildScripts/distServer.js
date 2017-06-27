import express from 'express';
import path from 'path';
import compression from 'compression';

/* eslint-disable no-console */

const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
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
