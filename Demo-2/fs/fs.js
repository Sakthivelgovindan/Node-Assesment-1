const fs = require('fs');

// console.log(fs);

const path = "/home/sakthivel/Desktop/MKC";

//checks execute permission
// fs.access(path, fs.constants.X_OK, (err) => {
//   if (err) {
//       console.log("%s doesn't exist", path);
//   } else {
//       console.log('can execute %s', path);
//   }
// });

// Check if we have read/write permissions
// When specifying multiple permission modes
// each mode is separated by a pipe : `|`
fs.access(path, fs.constants.R_OK | fs.constants.W_OK, (err) => {
  if (err) {
      console.log("%s doesn't exist", path);
  } else {
      console.log('can read/write %s', path);
  }
});

//Read file
// fs.readFile(`${path}/Test.tx`, function(err,data){
//   if (!err) {
//       console.log('Received data: ' + data);
//   } else {
//       console.log(err);
//   }
// });


//Write file

//Asynchronous
// fs.writeFile(`${path}/Test.tx`, "Asynchronous - Write data to file 1234567899", function(err) {
//   if(err) {
//       return console.log(err);
//   }
//   console.log("The file was saved!");
// }); 

//Synchronous
// fs.writeFileSync(`${path}/Test.txt`, 'Synchronous - Write data to file');


//Append file

//Asynchronous
// fs.appendFile(`${path}/Test.txt`, ' data to append - Asynchronously', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//Synchronous
// fs.appendFileSync(`${path}/Test.txt`, 'data to append - Synchronous');


// Open file, write file and close file
// const appendString = ' string to append to file ';
// fs.open(`${path}/Test.txt`, 'a', function( e, id ) {
//   console.log('file opened');
//   fs.write( id, appendString, function(){
//     fs.close(id, function(){
//       console.log('file closed');
//     });
//   });
// });

