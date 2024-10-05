const EventEmitter = require("events");
const fs = require("fs");

const eventEmitter = new EventEmitter();

// Listener for the 'fileRead' event
// This function will run when the 'fileRead' event is triggered
eventEmitter.on("fileRead", (fileData, number) => {
    console.log(number); // Log the number passed to the event handler
    console.log("File content:", fileData); // Log the file's content
});

// Simulate an asynchronous file read operation
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;  // If there's an error reading the file, throw an error

  // Define a number variable to demonstrate passing multiple arguments to the event handler
  const number = 2000;

  // Emit the 'fileRead' event after successfully reading the file
  // Passing 'data' (file content) and 'number' to the event listener
  eventEmitter.emit("fileRead", data, number);
});
