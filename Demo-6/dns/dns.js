const dns = require('dns');


// Returns an array containing all IP addresses belonging to the current server
// console.log("Get Server",dns.getServers());

// Looks up a hostname.
// A callback function contains information about the hostname, including it's IP address
dns.lookup('mkce.ac.in', function (err, addresses) {
    if(err){
        return `Error - ${err}`;
    }
  console.log("Lookup hostname" ,addresses);
});

// Looks up a address and port. 
// A callback function contains information about the address, such as the hostname
// dns.lookupService('127.0.0.1', 22, function (err, hostname) {
//     if(err){
//         return `Error - ${err}`;
//     }
//   console.log("Look up service",hostname);
// });

//Returns an array of record types belonging to the specified hostname
//A - IPv4 address
// dns.resolve('flipkart.com', "A", function (err, records){
//     console.log('IPv4 Address: %j', records);
// });

//NS - Name server records
// dns.resolve('google.com', "NS", function (err, records){
//     console.log('Name server: %j', records);
// });
