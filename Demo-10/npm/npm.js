const http = require('http');
const randomstring = require("randomstring");

//create a server object:
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(randomHexColor()); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080


const { 
  randomHexColor, 
  randomHexColorStartWith, 
  randomHexColorEndWith,
  randomHexColorStartAndEndWith,
  randomHexColorWithArray,
  randomHexColorWithArrayOfObject,
  randomHexColorArrayStartWith,
  randomHexColorArrayEndWith,
} = require('random-hex-color-generator')


// Generate random hex color
// console.log("Random Hex COlor : ",randomHexColor()); // => OUTPUT --> '#FFE2A3'


// // Generate random hex color start with custom hex code
// console.log("Random Hex COlor Start with: ",randomHexColorStartWith('AAAA')); // => OUTPUT --> '#00AFD2'


// // Generate random hex color end with custom hex code
// console.log("Random Hex COlor end with: ",randomHexColorEndWith('FF')); // => OUTPUT --> '#2345FF'


// // Generate random hex color start and end with custom hex code
// console.log("Random Hex COlor start and end with: ",randomHexColorStartAndEndWith('AA','FF')); // => OUTPUT --> '#AA23FF'


// // Generate random hex color array 
console.log("Random Hex COlor with array: ",randomHexColorWithArray()); // => OUTPUT --> ['#BF0966', '#81BFE8', '#002B3A']


// // Generate random hex color array using array length 
// console.log("Random Hex COlor with array length: ",randomHexColorWithArray(2)); // => OUTPUT --> ['#9CD84D', '#440343']

// // Generate random hex color array value start with
// console.log("Random Hex COlor : ",randomHexColorArrayStartWith("FF", 2)) // => OUTPUT --> ['#FFD84D', '#FF0343']


// // Generate random hex color with array of object
// console.log("Random Hex COlor : ",randomHexColorWithArrayOfObject()); // => OUTPUT --> [{ key: 1, value: '#95DD11' }]


// // Generate random hex color with array of object using array length 
// console.log("Random Hex COlor : ",randomHexColorWithArrayOfObject(2)); // => OUTPUT --> [{ key: 1, value: '#9CD84D' },{ key: 2, value: '#440343'}]


// Generate random hex color array value end with
// console.log("Random Hex COlor : ",randomHexColorArrayEndWith("FF", 2));