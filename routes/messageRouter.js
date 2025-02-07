const express = require("express");
const auth = require("../middlewares/auth");
const messageController = require("../controllers/messageController");

const messagerouter = express.Router();

messagerouter.get("/users", auth.checkAuth, messageController.getUserForSidebar);
messagerouter.get("/:id", auth.checkAuth, messageController.getmessage);
messagerouter.post("/send/:id", auth.checkAuth, messageController.sendMessage);


module.exports = messagerouter;