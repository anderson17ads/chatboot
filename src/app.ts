require('dotenv/config');

import express from 'express';
import conversations from './conversations';

const app = express();

app.get('/', (request, response) => {
  conversations();

  return response.send('Test!');
});

app.listen(process.env.PORT || 3000);