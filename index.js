const express = require('express');

const app = express();
const port=4000;
app.get('/greet', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, ()=>{
    console.log(`Server listens to port ${port}`);
});