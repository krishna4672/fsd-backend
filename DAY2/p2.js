const fs = require('fs');
// read the data from the file
fs.readFile("./mydir/data.txt","utf8",(err,data) =>{
    if(arr) throw err;
    console.log("data read from file!",data);
});