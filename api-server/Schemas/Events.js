const mongoose = require('mongoose') 
const Schema = mongoose.Schema 
const passportLocalMongoose = require('passport-local-mongoose'); 
var Events = new Schema({ 
    eventName: { 
        type: String,
        required: true
    }, 
    clubName: { 
        type: String,
        required: true 
    },
    eventDate : {
        type: Date, 
        required: true
    } ,
    eventDetails : {
        type : String,
        required: true
    },
    eventLocation : {
        type : String,
        required: true
    }
}) 
  
Events.plugin(passportLocalMongoose); 
module.exports = mongoose.model('Events', Events)
