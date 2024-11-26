// lib/mongoose.js

import mongoose from 'mongoose';

const connectDb = async () => {
  const mongoUri = 'mongodb+srv://mayankkesharwani7505:DTtv3VRIcV0lghqh@gig.59jua.mongodb.net/GIG'; // Replace with your MongoDB URI

  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully'); // Log success
  } catch (error) {
    console.error('Error connecting to MongoDB:', error); // Log error
    process.exit(1); // Exit process with error code
  }
};

export default connectDb;
