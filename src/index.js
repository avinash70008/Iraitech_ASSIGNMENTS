const express = require("express");
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())

const connect = require("./configs/db");
const {register, login} = require("./controllers/auth.controller")
const productsController = require("./controllers/profile.controller")

app.post("/register", register)
app.post("/login", login)
app.use("", productsController)

app.listen(5000, async() => {
    try{
        await connect()
        console.log("Connected Sucessful on Port 5000")
    }
    catch(err){
        console.log(err.message)
    }
})