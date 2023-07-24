import express from 'express';
import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
import routes from './modules/core/routes';
import dbConnect from './modules/core/db';


const app = express();
const port = 3000;

dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);
// app.get('/', home);
// app.get('/info', info);

errorHandler(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
