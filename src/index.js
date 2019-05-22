require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
const app = express();
const cors = require('cors');
const router = require('./routes/index');


app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`); // eslint-disable-line
});
