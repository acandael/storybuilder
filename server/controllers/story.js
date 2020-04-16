const Story = require('../models/story');

async function getStories(req, res) {
  try {
    const stories = await Story.find();
    res.status(200);
    res.json(stories);
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
  postStory,
};
