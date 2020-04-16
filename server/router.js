const router = require('express').Router();
const story = require('./controllers/story');

router.get('/stories', story.getStories);
router.post('/stories', story.postStory);

module.exports = router;
