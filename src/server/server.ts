import * as express from 'express';
import apiRouter from './routes';

const app = express();

app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 3000;
console.log('Hello World!');
app.listen(port, () => console.log(`Server is listening on port: ${port}`));
