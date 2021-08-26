const express= require("express")
const app= express()
const port= 3030
const path= require("path")

app.use(express.static('public'))

app.get("/carrito", (req,res)=> {res.sendFile(path.join(__dirname,"views","carrito.html"))})
app.get("/", (req,res)=> {res.sendFile(path.join(__dirname,"views","home.html"))})
app.get("/producto", (req,res)=> {res.sendFile(path.join(__dirname,"views","producto.html"))})
app.get("/register", (req,res)=> {res.sendFile(path.join(__dirname,"views","register.html"))})
app.get("/login", (req,res)=> {res.sendFile(path.join(__dirname,"views","login.html"))})

app.listen(port, ()=> console.log("se levanto server en el puerto " +port))