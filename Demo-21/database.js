const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  database: "collegeManagement",
  user: "root",
  password: "root",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// const sql = "CREATE DATABASE collegeManagement";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows);
//     console.log("Database created");
// });

// const sql =
//   "CREATE TABLE employees(empId int,empFirstName varchar(255),empLastName varchar(255), empAge int,empEmailId varchar(255))";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Table created");
// });


// const sql = "INSERT INTO `employees` (`empId`, `empFirstName`, `empLastName`, `empAge`, `empEmailId`) VALUES ('1', 'Jon', 'Snow', '30', 'jonsnow@gmail.com')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(`${result.affectedRows} record inserted`);
//   });

const sql = "SELECT * FROM employees";
con.query(sql, function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

// const sql = "UPDATE `employees` SET `empAge`= 35 WHERE `empId`=2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });


// const sql = "DELETE FROM `employees` WHERE `empId`=2";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Number of records deleted: " + result.affectedRows);
// });

