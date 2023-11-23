import mongoose from "mongoose";

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://oddras:${password}@notesapp.mf4mlpx.mongodb.net/firstDatabase?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const userSchema = new mongoose.Schema(
  {
    email: String,
    username: String,
    password: String,
    userId: Number,
  },
  {
    // Exclude _id and __v from query results
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (doc, ret) => {
        delete ret._id;
      },
    },
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: (doc, ret) => {
        delete ret._id;
      },
    },
  }
);

const User = mongoose.model("User", userSchema);

const user = new User({
  email: "sample@gmail.com",
  username: "sampleUser",
  password: "12345678",
  userId: Math.floor(Math.random() * 100),
});

User.find({}).then((result) => {
  result.forEach((user) => {
    console.log(user);
  });
  mongoose.connection.close();
});

// user.save().then((result) => {
//   console.log("user saved!");
//   mongoose.connection.close();
// });
