const User = require("../models/user")
const Message = require("../models/messageModul")
const messageController = {
    getUserForSidebar: async (req, res) => {
        try {
            const userid = req.userId
            const filteredUsers = await User.find({ _id: { $ne: userid } }).select("-password")

            res.status(200).json(filteredUsers)
        }
        catch (error) {
            console.log("Error", error.message);
            res.status(500).json({ erroe: "Inter serever error" })
        }
    },
    getmessage: async (req, res) => {
        try {
            const { id: userToChatId } = req.params;
            const myid = req.userId

            const message = await Message.find({
                $or: [
                    { senderId: myid, recevireId: userToChatId },
                    { senderId: userToChatId, recevireId: myid }
                ]
            })

            res.status(200).json(message)
        }
        catch (error) {
            console.log("Error", error.message);
            res.status(500).json({ erroe: "Inter serever error" })
        }
    },
    sendMessage: async (req, res) => {
        try {
            const { text, image } = req.body;
            const { id: recevireId } = req.params;
            const senderId = req.userId

            let imageUrl;
            if (image) {
                const uploadeResponse = await cloudinary.upload(image);
                imageUrl = uploadeResponse.secure_url;
            }

            const newMessage = new Message({
                senderId,
                recevireId,
                text,
                image: imageUrl
            })

            await newMessage.save()

            res.sataus(201).json(newMessage)

        }
        catch (error) {
            console.log("Error", error.message);
            res.status(500).json({ erroe: "Inter serever error" })
        }
    }
}

module.exports = messageController;