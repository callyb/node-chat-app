const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("new user connected");

  // socket.emit("newEmail", {
  //   from: "mike@example.com",
  //   text: "what is going on",
  //   createAt: 123
  // });

  // Send message from server to browser
  socket.emit("newMessage", {
    from: "test@test.com",
    text: "This is a test message",
    createdAt: 123
  });

  // socket.on("createEmail", newEmail => {
  //   console.log("createEmail", newEmail);
  // });

  // Listener for message to browser from server
  socket.on("createMessage", newMessage => {
    console.log("createMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => {
  console.log(`Started up at ${port}`);
});
