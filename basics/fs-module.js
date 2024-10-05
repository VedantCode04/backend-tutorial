import fs from "fs"

// Sync write: This will write "hello test" to a file named "text.txt". 
// If the file does not exist, it will be created. If it exists, it will be overwritten.
fs.writeFileSync("./text.txt", "hello test")

// Async write: Similar to writeFileSync, but operates asynchronously.
// If an error occurs during writing, it will be logged in the callback.
fs.writeFile("./text.txt", "hello from test", (err) => {
    console.log(err);  // Logs error if any, otherwise null.
})

// Sync read: Reads the contents of "name.txt" synchronously.
// The 'utf-8' encoding ensures that the file is read as a string.
const data = fs.readFileSync("./name.txt", "utf-8")
console.log(data);  // Logs the content of "name.txt".

// Async read: Reads the contents of "text.txt" asynchronously.
// If there's no error, the content is logged in the callback function.
fs.readFile("./text.txt", "utf-8", (err, data) => {
    if (!err) {
        console.log(data);  // Logs content if no error.
    } else {
        console.log(err);  // Logs error if any.
    }
})

// Append: Adds text to the end of a file, or creates it if it doesn't exist.
// Sync append: Appends "hello everyone" to "name.txt" (uncomment if needed).
// fs.appendFileSync("./name.txt", "hello everyone")

// Async append: Appends " vedant here" to "name.txt" asynchronously.
fs.appendFile("./name.txt", " vedant here", (err) => {
    console.log(err);  // Logs error if any.
})

// Sync copy: Copies the contents of "name.txt" to a new file "name2.txt" synchronously.
fs.cpSync("./name.txt", "name2.txt")

// Async copy: Copies the contents of "name.txt" to "name2.txt" asynchronously.
fs.copyFile("./name.txt", "./name2.txt", (err) => {
    console.log(err);  // Logs error if any.
})

// Async delete: Deletes "name.txt" asynchronously.
// If the file doesn't exist or another error occurs, it will log the error.
fs.unlink("./name.txt", (err) => console.log(err))

// Sync delete: Synchronously deletes "name.txt". If the file doesn't exist, it throws an error.
fs.unlinkSync("./name2.txt");  // Deletes "name2.txt" synchronously.
