const Story = require('../models/story');

async function getStories(req, res) {
  try {
    const stories = await Story.find();
    console.log(stories);
    res.status(200);
    res.json(stories);
  } catch (err) {
    console.log(error); // eslint-disable-line no-console
    res.sendStatus(500);
  }
}

async function getStory(req, res) {
  try {
    const story = await Story.findById(req.params.id, (err, story) => {
      if (err) {
        console.log('could not find story');
        res.sendStatus(404);
      } else {
        res.status(200);
        res.json(story);
      }
    });
  } catch (err) {
    console.log(error); // eslint-disable-line no-console
    res.sendStatus(500);
  }
}

async function postStory(req, res) {
  try {
    const newStory = await Story.create({
      title: req.body.title,
      description: req.body.description,
      year: req.body.year,
      photos: req.body.photos,
    });
    res.status(201);
    res.json(newStory);
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
    res.sendStatus(500);
  }
}

module.exports = {
  getStories,
  getStory,
  postStory,
};
