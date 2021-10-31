const url = require('url');

var adr = 'http://localhost:8080/firstpage.html?year=2020&month=october&date=20';

const q = url.parse(adr, true);

// //Returns the host name of Url
// console.log("Host name",q.host); //returns 'localhost:8080'

// //Return the pathname
// console.log("Path name",q.pathname);

// //Return the query string if any available
// console.log("Query string",q.search);

// //Return the query object
// //returns an object: { year: 2017, month: 'february' }
var qdata = q.query; 
console.log("Query object data",JSON.stringify(qdata)); 

// //Get month
console.log("Query Month",qdata.month);

// //Get year
console.log("Query Year",qdata.year);

// //Get date
console.log("Query date",qdata.date);
