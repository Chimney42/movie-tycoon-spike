import express from 'express';
import WritingService from './src/services/writingService';
import UserState from './src/models/userState';

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.put('/user/:userId/screenplay/:screenplayId', async (req, res) => {
  const screenplayId = req.params.screenplayId;
  const userId = req.params.userId;
  console.log(`adding screenplay ${screenplayId} to player ${userId}`);
  
  const state = new UserState(userId);
  const writingService = new WritingService(state);
  await writingService.addScreenplayToUser(screenplayId);

  res.send(`screenplay ${screenplayId} added to player ${userId}`);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});