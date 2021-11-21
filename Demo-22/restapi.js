const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mysql = require("mysql");

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  database: "collegeManagement",
  user: "root",
  password: "root",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected successfully!");
});

app.get("/get-employee", function (req, res) {
  const sql = "SELECT * FROM employees";
  connection.query(sql, function (err, result, fields) {
    if (err) throw err;
    const employeeList = result;
    res.json({ employeeList });
  });
});


app.post("/add-employee", function (req, res) {

  console.log(req.body);
  const {empId, empFirstName,empLastName,empAge,empEmailId} = req.body;
  const sql = "INSERT INTO `employees` (`empId`, `empFirstName`, `empLastName`, `empAge`, `empEmailId`) VALUES (?, ?, ?, ?, ?)";
  connection.query(sql,[empId, empFirstName,empLastName,empAge,empEmailId], function (err, result, fields) {
    if (err) throw err;
    console.log(`${result.affectedRows} record inserted`);
    res.json({ affectedRows:result.affectedRows });
  });
});


app.put("/update-employee", function (req, res) {
  const {empId, empFirstName,empLastName,empAge,empEmailId} = req.body;
  const sql = "UPDATE `employees` SET `empFirstName` = ?, `empLastName` = ?,`empAge`= ? , `empEmailId` = ? WHERE `empId`= ?";
  connection.query(sql,[empFirstName,empLastName,empAge,empEmailId,empId], function (err, result, fields) {
    if (err) throw err;
    res.json({ affectedRows:result.affectedRows });
  });
});

app.delete("/delete-employee", function (req, res) {
  const {empId} = req.body;
  const sql = "DELETE FROM `employees` WHERE `empId` = ?";
  connection.query(sql,[empId],function (err, result, fields) {
    if (err) throw err;
    res.json({ affectedRows:result.affectedRows });
  });
});

app.listen(8000, function () {
  console.log(`🚀 Server ready at http://localhost:${8000}`);
});
