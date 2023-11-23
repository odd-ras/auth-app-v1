import mongoose from "mongoose";

//CREATE SCHEMA
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  id: Number,
});

// userSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });

export default mongoose.model("User", userSchema);
