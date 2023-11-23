import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

export default {
  MONGODB_URI,
  PORT,
  ACCESS_TOKEN_SECRET,
};
