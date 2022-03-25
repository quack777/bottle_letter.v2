import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from '../config/config';
import { LetterWrite } from '../model/letterWrite.model';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('build'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(config.mongo.url)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e));

app.get('/letterInfo', (req, res) => {
  res.send({
    letterInfo: [
      {
        id: 1,
        title: '첫번째 편지 제목',
        contents: '첫번째 편지 내용',
      },
      {
        id: 2,
        title: '두번째 편지 제목',
        contents: '두번째 편지 내용',
      },
      {
        id: 3,
        title: '세번째 편지 제목',
        contents: '세번째 편지 내용',
      },
    ],
  });
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.post('/post', (req, res) => {
  const letter = new LetterWrite(req.body);
});

app.listen(PORT, () => {
  console.log('http://localhost:4000/');
});
