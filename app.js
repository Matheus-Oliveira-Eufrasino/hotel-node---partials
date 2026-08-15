const express = require("express");
const app = express();
const porta = 3000;


app.use(express.static("./app/public"));

app.set("view engine","ejs");

app.set("views","./app/views");


app.use(express.json());

app.use(express.urlencoded({extended:true}));


const rota = require("./app/routes/router");
const rotaAdm = require("./app/routes/router-adm");

app.use("/", rota);

app.use("/adm", rotaAdm); 

app.listen(porta, ()=>{
    console.log(`Servidor on-line \nhttp://localhost:${porta}`)
})

