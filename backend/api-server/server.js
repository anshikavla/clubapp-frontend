const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/"
mongoose.connect(url).then((ans) => { 
    console.log("ConnectedSuccessful") 
}).catch((err) => { 
    console.log("Error in the Connection") 
}) 
const User = require("./Schemas/User");
var http = require('http')
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
    resp.send("App is Working");
});

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
  
app.post("/register", async (req, res) => {
    var rString = randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
 
    const user = await User.create({ 
      username: req.body.username, 
      password: req.body.password,
      phone : req.body.phone,
      emailId : req.body.emailId,
      registerNumber: rString
    }); 
    return res.status(200).json(user); 
  });

  app.get('/profile', async (req, res) => {
    const { username } = req.query;
    console.log("In server ")
    console.log(username)
    try {
      if (!username) {
        return res.status(400).json({ error: "Username parameter is required" });
      }
  
      const profile = await User.findOne({ username : username });
      
      if (!profile) {
        return res.status(404).json({ error: "Profile not found" });
      }
      res.json({
                                        username : profile.username , 
                                        emailId :profile.emailId ,
                                        phone: profile.phone,
                                        registerNumber : profile.registerNumber
                                    });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
 

app.post("/login", async function(req, res){ 
    try { 
        const user = await User.findOne({ username: req.body.username }); 
        if (user) { 
          const result = req.body.password === user.password; 
          if (result) { 
            res.status(200).json({value : true}); 
          } else { 
            res.status(400).json({ error: "password doesn't match",value:false}); 
          } 
        } else { 
          res.status(400).json({ error: "User doesn't exist" , value:false}); 
        } 
      } catch (error) { 
        res.status(400).json({ error : "Invalid",value:false}); 
      } 
}); 
var port = process.env.PORT || 5000; 
app.listen(port, function () { 
    console.log("Server Has Started!"); 
});
