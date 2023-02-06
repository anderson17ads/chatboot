require('dotenv/config');

import express from 'express';
import bodyParser from 'body-parser';
import conversations from './conversations';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.post('/', (request, response) => {
  conversations();

  return response.send('Test!');
});

app.listen(process.env.PORT || 3000);