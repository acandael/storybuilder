const router = require('express').Router();
const story = require('./controllers/story');

router.get('/stories', story.getStories);
router.get('/stories/:id', story.getStory);
router.post('/stories', story.postStory);

module.exports = router;
