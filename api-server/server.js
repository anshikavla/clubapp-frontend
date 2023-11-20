const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/"
mongoose.connect(url).then((ans) => { 
    console.log("ConnectedSuccessful") 
}).catch((err) => { 
    console.log("Error in the Connection") 
}) 


const User = require("./Schemas/User");
const Club = require("./Schemas/Club");
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
      registerNumber: rString,
      wishlist : ""
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
  app.get('/wishlist', async (req, res) => {
    const { username } = req.query;
    console.log(username)
    try {
      if (!username) {
        return res.status(400).json({ error: "Username parameter is required" });
      }
      const profile = await User.findOne({ username : username });  
      if (!profile) {
        return res.status(404).json({ error: "Profile not found" });
      }
      res.json(profile);
      console.log(profile);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  app.get('/clubs', async (req, res) => {
    try {
      const things = await Club.find(); 
      res.json(things);
    } catch (err) {
      console.error('Error retrieving data:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });

  app.get('/club', async (req, res) => {
    const { clubname } = req.query;
    console.log(clubname)
    try {
      if (!clubname) {
        return res.status(400).json({ error: "Club name parameter is required" });
      }
      const profile = await Club.findOne({ Club_name : clubname });  
      if (!profile) {
        return res.status(404).json({ error: "Club not found" });
      }
      res.json(profile);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.get('/filteredclubs', async (req, res) => {
    const { type } = req.query;
    console.log(type)
    try {
      if (!type) {
        return res.status(400).json({ error: "Type parameter is required" });
      }
      const profile = await Club.find({ Type : type });  
      //console.log(profile)
      if (!profile) {
        return res.status(404).json({ error: "Club not found" });
      }
      res.json(profile);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  app.get('/club', async (req, res) => {
    try {
      const allClubs = await Club.find(); // Retrieve all clubs from the database
      res.json({ clubs: allClubs }); // Send the retrieved clubs as JSON
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });



  app.post("/updatewishlist", async (req, res) => {
    console.log("In wish")
    try {
      const filter = { username: req.body.username };
      //const update = { wishlist : req.body.wishlist };
      const result =  await User.findOneAndUpdate(
        filter,{ $addToSet: { wishlist: req.body.wishlist } },
      );
      console.log(result)
      if (!result) {
        return res.status(404).send('User not found or not updated');
      }
      return res.status(200).json(result);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send('Internal Server Error');
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
