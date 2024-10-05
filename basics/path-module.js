// Import the 'path' module which provides utilities for working with file and directory paths
const path = require("path");

// __dirname gives the directory path of the current file
console.log("__dirname:", __dirname); // Example output: /Users/John/Documents/project

// __filename gives the full path of the current file (including the file name)
console.log("__filename:", __filename); // Example output: /Users/John/Documents/project/index.js

console.log(); // Empty line for better readability in the output

// path.dirname() returns the directory part of a path (for __dirname, it returns the parent folder)
console.log("Parent directory of __dirname:", path.dirname(__dirname)); // Example output: /Users/John/Documents

// path.dirname() also works on __filename, returning the directory containing the file
console.log("Directory of __filename:", path.dirname(__filename)); // Example output: /Users/John/Documents/project

console.log(); // Empty line for readability

// path.extname() returns the file extension from a path
// For __dirname (which is a directory), there is no file extension, so it returns an empty string
console.log("File extension of __dirname:", path.extname(__dirname)); // Example output: (empty string)

// For __filename, it will return the file extension (e.g., .js)
console.log("File extension of __filename:", path.extname(__filename)); // Example output: .js

console.log(); // Empty line for readability

// path.parse() breaks down the path into parts (root, dir, base, ext, name)
// path.format() combines them back into a full path string
console.log("Formatted path from parsed __filename:", path.format(path.parse(__filename)));
// Example output: /Users/John/Documents/project/index.js

// path.isAbsolute() checks if a path is absolute (full path from root)
// __filename is an absolute path, so this will return true
console.log("Is __filename an absolute path?", path.isAbsolute(__filename)); // Output: true

// Checking if a relative path is absolute (e.g., './index.js' is relative, so it returns false)
console.log("Is './index.js' an absolute path?", path.isAbsolute("./index.js")); // Output: false

console.log(); // Empty line for readability

// path.join() joins multiple path segments together into a single path
// Here it joins folder1, folder2, and add.js into a path
console.log("Joined path:", path.join("folder1", "folder2", "add.js")); // Example output: folder1/folder2/add.js

// Joining __dirname (current directory) with 'data.json' to get the full path of 'data.json' in this directory
console.log("Joined path with __dirname:", path.join(__dirname, "data.json"));
// Example output: /Users/John/Documents/project/data.json

// path.resolve() resolves a sequence of paths into an absolute path
// This ensures 'data.json' is resolved to an absolute path based on __dirname
console.log("Resolved path for data.json:", path.resolve(__dirname, "data.json"));
// Example output: /Users/John/Documents/project/data.json
