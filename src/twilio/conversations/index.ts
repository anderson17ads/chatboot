import token from '../auth/token';
import { Client } from '@twilio/conversations';

export const init = () => {
  // console.log(token());
  const client = new Client(token());

  // Before you use the client, subscribe to the `'initialized'` event.
  client.on('initialized', () => {
    // Use the client.
    console.log('ok');
  });

  // To catch client initialization errors, subscribe to the `'initFailed'` event.
  client.on('initFailed', ({ error }) => {
    // Handle the error.
  });
}