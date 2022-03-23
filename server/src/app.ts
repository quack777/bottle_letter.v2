import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

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

/* app.post('/writeLetter', (req, res) => {
  const user = req.body;
}); */
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT, () => {
  console.log('http://localhost:3000/');
});
