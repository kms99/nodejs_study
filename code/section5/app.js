const http = require("http");

const express = require("express");

const app = express();

// middleware 1
app.use((req, res, next) => {
  console.log("middleware 1");
  next(); // to next middleware
});

// middleware 2
app.use((req, res, next) => {
  console.log("middleware 2");
});

const server = http.createServer(app);

server.listen(3000);
