// import mongoose from "mongoose";

// const connectDb = async (req, res) =>{
    
//     await mongoose.connect(process.env.MONGO_URI)
    
// }
// export default connectDb;

import mongoose from 'mongoose';

const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    // If already connected, return.
    return;
  }

  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDb;