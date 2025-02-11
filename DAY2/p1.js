const fs = require('fs');
const data='i am new data';
fs.writeFile("./data.txt",data,(arr) =>{
    if(arr) throw err;
    console.log("file created successfully!");
})