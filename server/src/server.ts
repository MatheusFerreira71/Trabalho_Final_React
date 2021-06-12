import express from 'express';
import routes from './routes';
import cors from 'cors';
import logger from 'morgan';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
