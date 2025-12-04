const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./Routes/AuthRouter');
const PORT = process.env.PORT || 8080;
app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRouter);

app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});