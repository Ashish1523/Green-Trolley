require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

console.log("Starting auth service...");

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000 // fail faster if can't connect
})
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Auth service running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // exit if db can't connect
  });

