import app from './app.js';
import { connectToDb } from './db/index.js';

import { config } from 'dotenv';

config();

const port = process.env.PORT || 8000;

connectToDb()
  .then(() => {
    app
      .listen(port, () => {
        console.log(`App is listening on Port ${port}`);
      })
      .on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.log('Port is busy, try using another port !!!');
        } else {
          console.log(err);
        }
      });
  })
  .catch((err) => {
    console.log('Mongo db connection failed !!!', err);
    process.exit(1);
  });
