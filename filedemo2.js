import fs from 'fs'
fs.open('data1.txt','r',(err,fp)=>{
    fs.readFile(fp,'utf8',(err,data)=>{
        console.log(data)
    })

})