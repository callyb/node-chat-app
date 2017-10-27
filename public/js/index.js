var socket = io();

socket.on("connect", function() {
  console.log("connected to server");
});

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

// Listen for message from server
socket.on("newMessage", function(message) {
  console.log("new message", message);
  var li = jQuery("<li></li>");
  li.text(`${message.from}: ${message.text}`);

  jQuery("#messages").append(li);
});

socket.emit(
  "createMessage",
  {
    from: "Carole",
    text: "Hi"
  },
  function(data) {
    console.log("got it", data);
  }
);

$("#message-form").on("submit", function(e) {
  e.preventDefault();

  socket.emit(
    "createMessage",
    {
      from: "User",
      text: jQuery("[name=message]").val()
    },
    function() {
      console.log("Got it");
    }
  );
});

var locationButton = jQuery("#send-location");
locationButton.on("click", function() {
  if (!navigator.geolocation) {
    return alert("Geolocation not supported by your browser");
  }

  navigator.geolocation.getCurrentPosition(
    function(position) {
      console.log(position);
    },
    function() {
      alert("Unable to fetch location");
    }
  );
});
