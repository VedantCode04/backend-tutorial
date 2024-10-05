// Import the built-in 'http' module to create a server
const http = require("http");

// Import 'url' module to parse URL and handle query parameters
const url = require("url");

// Define the port number the server will listen on
const PORT = 3000;

// Create the HTTP server using 'http.createServer()'
// It takes a callback function with 'req' (request) and 'res' (response) as arguments
const server = http.createServer((req, res) => {
  // Parse the incoming request URL (with true to get query parameters as an object)
  const parsedUrl = url.parse(req.url, true);

  // Access the path of the URL to determine what route is requested
  const path = parsedUrl.pathname;

  // Access the query parameters from the parsed URL (if any)
  const query = parsedUrl.query;

  // Example: Check if a 'name' parameter exists in the query, else set it to 'Guest'
  const name = query.name || "Guest";

  // ROUTING: Handle requests based on the URL path
  if (path === "/") {
    // Set HTTP status code to 200 (OK) and content type to plain text
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to the Home Page");
  } else if (path === "/greet") {
    // Handle '/greet' route and respond with a personalized message
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Hello, ${name}!`);
  } else {
    // If the requested URL is not found, return a 404 status
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

// Make the server listen on the specified port
server.listen(PORT, () => {
  // Log a message to the console when the server is running
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Error handling: In case the server encounters any errors
server.on("error", (err) => {
  console.error("Server encountered an error:", err);
});
