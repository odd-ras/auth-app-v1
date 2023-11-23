import text from "body-parser/lib/types/text";
import mongoose from "mongoose";
import supertest from "supertest";
import app from "../app.js";
import User from "../models/user.js";

const api = supertest(app);

const initialUsers = [
  {
    usermame: "kelvin",
    password: "12345678",
    email: "kelvin@gmail.com",
    id: Math.floor(Math.random() * 1000),
  },
  {
    usermame: "andrew",
    password: "12345678",
    email: "kelvin@gmail.com",
    id: Math.floor(Math.random() * 1000),
  },
  {
    usermame: "tafari",
    password: "12345678",
    email: "kelvin@gmail.com",
    id: Math.floor(Math.random() * 1000),
  },
  {
    usermame: "karen",
    password: "12345678",
    email: "kelvin@gmail.com",
    id: Math.floor(Math.random() * 1000),
  },
];

beforeEach(async () => {
  await User.deleteMany({});
  let userObject = new User(initialUsers[0]);
  await userObject.save();
  userObject = new User(initialUsers[1]);
  await userObject.save();
  userObject = new User(initialUsers[2]);
  await userObject.save();
  userObject = new User(initialUsers[3]);
  await userObject.save();
});

test("users are returned as json", async () => {
  await api
    .get("/api/users")
    .expect(200)
    .expect("Content-Type", /application\/json/);
}, 100000);

test("all users are returned", async () => {
  const response = await api.get("/api/users");
  expect(response.body).toHaveLength(initialUsers.length);
});

test("a specific user is within the returned users", async () => {
  const response = await api.get("/api/users");
  console.log(response.body);

  const returnedValue = await response.body.map((el) => el);
  console.log(returnedValue);
  expect(returnedValue[0].password).toContain("12345678");
});

afterAll(async () => {
  await mongoose.connection.close();
});
