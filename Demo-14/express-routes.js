const express = require("express");
const app = express();

// GET request from client
app.get("/", function (req, res) {
  console.log("Express app is running😀.........");
  res.send("Express app is running😀.........");
});

//http://localhost:8000/get-user
// GET request from client
app.get("/get-user", function (req, res) {
  console.log("Got a GET request from client");
  res.send("Get all users");
});

// POST request from client
app.post("/add-user", function (req, res) {
  console.log("Got a POST request from client");
  res.send("Post request processsed.");
});

// PUT request from client
app.put("/update-user", function (req, res) {
  console.log("Got a UPDATE request from client");
  res.send("Update request processsed.");
});

// DELETE request from client
app.delete("/delete-user", function (req, res) {
  console.log("Got a DELETE request from client");
  res.send("Delete request processsed.");
});

//Listening server with PORT 8000
app.listen(8000, function () {
  console.log(`🚀 Server ready at http://localhost:${8000}`);
});
