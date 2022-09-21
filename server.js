import express from 'express';
import students from './students.json' assert { type: 'json' };

const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello!',
  });
});

app.get('/students', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: students,
  });
});

app.get('/students/:id', (req, res) => {
  const id = req.params.id;
  if (id > students.length) {
    res.send(404).json({ status: 'fail', message: '404 Not Found' });
  } else {
    res.status(200).json({
      status: 'success',
      data: [students[id - 1]],
    });
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
