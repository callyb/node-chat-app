var socket = io();

socket.on("connect", function() {
  console.log("connected to server");

  // socket.emit("createEmail", {
  //   to: "jen@example.com",
  //   text: "hey this is Andrew"
  // });

  // Message to be emitted to server on behalf of browser
  socket.emit("createMessage", {
    from: "me@me.com",
    text: "this is my message to you...."
  });
});

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

// socket.on("newEmail", function(email) {
//   console.log("new email", email);
// });

// Listen for message from server
socket.on("newMessage", function(message) {
  console.log("new message", message);
});
