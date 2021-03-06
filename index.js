import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
}

const handleHome = (req, res) => {
  res.send('Hi from Home');
}

const handleProfile = (req, res) => {
  res.send('Hi profile');
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

app.get('/', handleHome);
app.get('/profile', handleProfile);


app.listen(4000, handleListening);