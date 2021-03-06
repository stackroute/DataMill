var mongoose = require('mongoose');
var userProfile = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  displayName: String,
  picture: String,
  gender: String,
  userRole: String,
  loginstatus: String,
  lastlogin: Date,
  token: String,
  loginwith: String,
  facebook: String,
  google: String,
  github: String,
  linkedin: String,
  user_ID: {type: String, unique: true}
  
});

module.exports = mongoose.model("Users", userProfile);
