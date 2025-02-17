require("dotenv").config()

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;
const EMAIL = process.env.EMAIL;
const PASS = process.env.PASS;
const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

module.exports = {
    MONGODB_URL,
    PORT,
    SECRET_KEY,
    EMAIL,
    PASS,
    CLOUD_NAME,
    API_KEY,
    API_SECRET
}