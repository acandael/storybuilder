const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/storybuilder_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
db.once('open', function () {
  console.log('Connected to MongoDB'); // eslint-disable-line no-console
});
