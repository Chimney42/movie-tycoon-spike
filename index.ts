import express from 'express';
import bodyParser from 'body-parser';

import WritingService from './src/services/writingService';
import StateService from './src/services/stateService';
import ScreenplayFactory from './src/factories/screenplayFactory';
import SchedulingService from './src/services/schedulingService';

// Create a new express application instance
const app: express.Application = express();
const stateService = new StateService();
const screenplayFactory = new ScreenplayFactory();
const schedulingService = new SchedulingService();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.put('/user/:userId/createNewScreenplay/', async (req, res) => {
  const userId = req.params.userId;
  const writerId = req.body.writerId;
  const time = {passed: req.body.timePassed, level: req.body.timeLevel};
  const genre = req.body.genre
  const writingService = new WritingService(stateService, screenplayFactory, schedulingService);

  writingService.createNewScreenplayForUser(writerId, time, genre, userId);
  res.send(`started process to create a new screenplay for player ${userId}`);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});