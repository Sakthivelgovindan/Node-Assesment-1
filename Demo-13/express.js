const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.listen(8000, function () {
    console.log(
      `🚀 Server ready at http://localhost:${8000}`
    );
  });