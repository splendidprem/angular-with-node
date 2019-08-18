import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes';


const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.use('/api', routes);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist/angular-with-express')));
}

const server = app.listen(port, () => {
  console.log('Listening on port ' + port);
});
