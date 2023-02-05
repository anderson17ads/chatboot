const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.send('Test Deploy 3!');
});

app.listen(process.env.PORT || 3000);