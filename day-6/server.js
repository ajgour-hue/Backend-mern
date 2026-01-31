// server ko statrt karna
// database s connect karnaeka


// cluster = storage + processer 

const app = require("./src/app")
const monggose = require("mongoose")

function connectToDb(){
    monggose.connect("mongodb+srv://ajay:LdYvmpUm4DnepuaC@cluster0.d1ny8lk.mongodb.net/day-6").then(()=>{
        console.log("connected to the database");
    })
}

connectToDb()

app.listen(3000,()=>{
    console.log("server running");
})