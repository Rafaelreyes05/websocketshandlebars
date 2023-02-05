const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const router = require('./routes/router/router')
const handlebars = require('express-handlebars')
const data = require('./data/productos.json')
const motor = 'handlebars'
const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("./public"));

// <------------------------- Configuracion de handlebars ------------------------->
app.engine(motor,handlebars.engine())
app.set("views", __dirname+"/views");
app.set("view engine", motor);

//Router
router(app)

// <------------------------- Sockets ------------------------->
io.on("connection", socket => {

  console.log("Un cliente se ha conectado");
  socket.emit("productos", data);
});

// <------------------------- Configuracion Servidor ------------------------->


const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Servidor HTTP con Websockets escuchando en el puerto ${connectedServer.address().port}`);
});

connectedServer.on("error", error => console.log(`Error en servidor ${error}`));