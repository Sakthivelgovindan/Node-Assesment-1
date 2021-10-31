const util = require('util');

// 	Formats the specified string, using the specified arguments
const txt = 'Congratulate %s on his %dth birthday!';
const result = util.format(txt, 'Windows', 58);
console.log(result);
