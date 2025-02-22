// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();
// const server = http.createServer(app); // ✅ Create HTTP server

// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:5173", "https://chatapp-react-project.netlify.app"],
//     credentials: true,
//   },
// });

// const userSocketMap = new Map(); // ✅ Store userId & socketId

// // ✅ When a user connects
// io.on("connection", (socket) => {
//   console.log("🟢 User connected:", socket.id);

//   socket.on("registerUser", (userId) => {
//     userSocketMap.set(userId, socket.id);
//     console.log(`✅ User ${userId} mapped to socket ${socket.id}`);
//   });

//   socket.on("disconnect", () => {
//     console.log("🔴 User disconnected:", socket.id);
//     for (const [userId, socketId] of userSocketMap.entries()) {
//       if (socketId === socket.id) {
//         userSocketMap.delete(userId);
//         break;
//       }
//     }
//   });
// });

// // ✅ Helper function to get the receiver's socket ID
// export const getReceiverSocketId = (receiverId) => userSocketMap.get(receiverId);

// // ✅ Export app, server, and io
// export { app, server, io };




import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["https://chatapp-react-project.netlify.app"],
    // origin: ["http://localhost:5173"],
  },
});

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

// used to store online users
const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
