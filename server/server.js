const app = require('express')();
const port = 3000;

app.get('/', (req,res) => {
  res.send('hi mr');
});

app.listen()
