const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/authRouter");



const app = express();


app.use(express.json());

app.use(cors(
    {
        // origin: ['https://guvi-event-management-project.netlify.app'],
        origin: ['http://localhost:5173'],
        // origin: ['http://localhost:5173',''],
        credentials: true,
        methods: ['GET', 'POST', 'PATCH', 'DELETE', "PUT"],
    }
))

app.use("/api/v1/auth", userRoutes);


module.exports = app








// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io'); // Use { Server } for latest socket.io
// const cors = require('cors');
// const chatRoutes = require('./routes/chatRoutes');
// const { saveMessage } = require('./controllers/chatController');

// require('dotenv').config();

// const app = express();
// const server = http.createServer(app);

// // ✅ Enable CORS middleware for Express
// app.use(cors({
//     origin: ['http://localhost:5173'],
//     methods: ['GET', 'POST'],
//     credentials: true
// }));

// app.use(express.json());
// app.use('/api/chat', chatRoutes);

// // ✅ Fix CORS for Socket.io
// const io = new Server(server, {
//     cors: {
//         origin: 'http://localhost:5173',
//         methods: ['GET', 'POST'],
//         credentials: true
//     }
// });

// // 🔌 Socket.io Events
// io.on('connection', (socket) => {
//     console.log(`🟢 User Connected: ${socket.id}`);

//     // Listen for chat messages
//     socket.on('chat message', async (data) => {
//         console.log('Message received:', data);
//         await saveMessage(data);
//         io.emit('chat message', data); // Broadcast message
//     });

//     socket.on('disconnect', () => {
//         console.log(`🔴 User Disconnected: ${socket.id}`);
//     });
// });


// module.exports = app;


