require('dotenv').config();
const PORT = process.env.PORT || 4000;
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

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true });
const testDB = mongoose.connection;
testDB.on('error', console.error.bind(console, 'connection error:')); //eslint-disable-line
testDB.once('open', () => {
  console.log('Restfull ipa DB connected'); //eslint-disable-line
});

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`); // eslint-disable-line
});


