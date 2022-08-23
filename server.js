// server.js
require('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file 
console.log(`I am ${process.env.NAME} wilder in ${process.env.CITY}, and i love ${process.env.LANGUAGE}`);
