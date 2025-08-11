const mongoose = require('mongoose');
// const User = require('../models/User.model');
mongoose.connect('mongodb://localhost:27017/usersdb')
  .then(async () => {
    const users = await mongoose.connection.db.collection('users').find().toArray();
    console.log(users);
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
