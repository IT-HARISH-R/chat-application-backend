const mongoose = require("mongoose");

const mongooseShema = new mongoose.Schema({
    senderId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: true,
    },
    recevireId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: true,
    },
    text: {
        type: String,
    },
    image: {
        type: String,
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Message", mongooseShema, "message");