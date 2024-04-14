const fs = require('fs');
const EventEmitter = require('events');

// Create an event emitter
const fileEmitter = new EventEmitter();

// File path
const filePath = 'file.txt';

// Read the content of the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        // If an error occurs, emit an error event
        fileEmitter.emit('error', err);
        return;
    }
    // If successful, emit a success event with the file content
    fileEmitter.emit('success', data);
});

// Listen for the success event
fileEmitter.on('success', (data) => {
    console.log("File content:", data);
});

// Listen for the error event
fileEmitter.on('error', (err) => {
    console.error("Error reading the file:", err);
});
