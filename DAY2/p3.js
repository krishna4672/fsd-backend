const fs= require('fs');
const newdata="I am apeended at the end of the file"
fs.appendFile("./data.txt","I am appended at the end of the file",(err)=>{
    if(err)
        console.error(err);
    else
    console.log("Data appended successfully!");
})