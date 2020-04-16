const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 Listening on http://localhost/:${PORT}`); // eslint-disable-line no-console
});
