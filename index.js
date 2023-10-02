const express = require("express");
const app = express();

const { createServer } = require("http");
const httpServer = createServer(app);

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// set the view engine to ejs
app.set("view engine", "ejs");
// serve images, CSS files, and JavaScript files in a directory named public
// app.use(express.static('public'))
// To create a virtual path prefix, eg: localhost:3000/static/styles/style.css
app.use("/static", express.static("public"));


// Code for Socket.io ======
const { Server } = require("socket.io");
const io = new Server(httpServer, { /* options */ });
const uuid = require("uuid");
// Code for Socket.io ======

const port = 3000;

// To get something from the server : Rendering index page
app.get("/", function (req, res) {
    // use res.render to load up an ejs view file
    res.render("pages/index");
});

app.get('/generate-room-id', (req, res) => {
    let roomId = uuid.v4();
    res.status(200).send(roomId)
});

app.get('/chat', (req, res) => {
    res.render("pages/chat");
})


httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
