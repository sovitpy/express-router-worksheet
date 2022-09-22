import express from 'express';
import students from './students.json' assert { type: 'json' };

const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello!',
  });
});

app.get('/students/1', (req, res) => {
  res.json({
    ID: '1',
    Name: 'Senpai',
    Gender: '1',
    Class: '32',
    Seat: '15',
    Club: '0',
    Persona: '1',
    Crush: '0',
    BreastSize: '0',
    Strength: '0',
    Hairstyle: '1',
    Color: 'Black',
    Eyes: 'Black',
    EyeType: 'Default',
    Stockings: 'None',
    Accessory: '0',
    ScheduleTime: '7_7_8_13.01_13.375_15.5_16_17.25_99_99',
    ScheduleDestination:
      'Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Hangout_Locker_Exit',
    ScheduleAction: 'Stand_Stand_Read_Sit_Eat_Sit_Clean_Read_Shoes_Stand',
    Info: "An average student. \n \n Average grades, average looks, average life... \n \n I'm not sure what you see in him.",
  });
});

// app.get('/students', (req, res) => {
//   res.sendStatus(200).json({
//     status: 'success',
//     data: students,
//   });
// });

// app.get('/students/:id', (req, res) => {
//   const id = req.params.id;
//   if (isNaN(id) || id > students.length) {
//     res.json({ status: 'fail', message: '404 Not Found' });
//   } else {
//     res.json({
//       status: 'success',
//       data: [students[id - 1]],
//     });
//   }
// });

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
