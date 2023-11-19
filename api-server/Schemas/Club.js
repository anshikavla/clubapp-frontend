const mongoose = require('mongoose');
const Schema = mongoose.Schema 
const passportLocalMongoose = require('passport-local-mongoose'); 
const studentclubDbURI = 'mongodb://localhost/studentclub';
const studentclubDbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const studentclubDb = mongoose.createConnection(studentclubDbURI, studentclubDbOptions);
studentclubDb.on('connected', () => {
  console.log(`Connected to second database at ${studentclubDbURI}`);
});
studentclubDb.on('error', (err) => {
  console.error(`Connection error for second database: ${err.message}`);
});

const details = new Schema({
  Club_name: {
    type: String,
    required: true,
  },
  Club_image: {
    type: String,
    required: true,
  },
  Club_details: {
    type: String,
    required: true,
  },
  Club_links: {
    type: String,
    required: true,
  },
  Club_owner_name: {
    type: String,
    required: true,
  },
  Club_owner_phone_no: {
    type: String,
    required: true,
  },
  Club_events: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
});

details.plugin(passportLocalMongoose);
module.exports = studentclubDb.model('details', details);
