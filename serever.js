const mongoose = require("mongoose")
const express = require("express")
const { PORT, MONGODB_URL } = require("./utils/config")
const app = require("./app")



const port = PORT || 4000
mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('✅ MongoDB Connected');
        app.listen(port, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.error('❌ MongoDB Connection Failed:', error);
    })
