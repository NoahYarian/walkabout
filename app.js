#!/usr/bin/env node

require('shelljs/global');

var args = [];

for (var i = 2; i < process.argv.length; i++) {
  args.push(process.argv[i]);
}

if (args.length === 0) {
  console.log("$ node app");
}


//set initial location
// walkabout start lat=40.7128
// walkabout start long=74.0059 alti=7
// ...
if (args[0] === "start") {
  exec('./genyshell -c "gps setstatus enabled"');
  exec('./genyshell -c "gps setlatitude 40.7128"');
  exec('./genyshell -c "gps setlongitude 74.0059"');
  exec('./genyshell -c "gps setaltitude 7"');
  // exec('');
  // exec('');
  // exec('');
  // exec('');
  // etc.
}


