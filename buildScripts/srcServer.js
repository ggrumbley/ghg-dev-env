const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.set('port', process.env.PORT || 3000)
const server = app.listen(app.get('port'), () => {
  console.log('====================================');
  console.log(`Express running → http://localhost:${server.address().port}`);
  console.log('====================================');
})
