// const mongoose = require('mongoose');

// const UserQuery = new mongoose.Schema({
//     name: {type: String, required: true},
//     email: {type: String, required: true},
//     subject: {type: String, required: true},
//     message: {type: String, required: true}
    
// }, {timestamps:true})

// mongoose.models ={}
// export default mongoose.model("UserQuery", UserQuery)

import mongoose from 'mongoose';

const userQuerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.UserQuery || mongoose.model('UserQuery', userQuerySchema);
