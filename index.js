const express = require("express");
const bodyParser = require('body-parser');
// Code for Socket.io ======
const { createServer } = require("http");
const { Server } = require("socket.io");
// Code for Socket.io ======

const app = express();
const port = 3000;

// Code for Socket.io ======
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });
// Code for Socket.io ======

// set the view engine to ejs
app.set("view engine", "ejs");
// serve images, CSS files, and JavaScript files in a directory named public
// app.use(express.static('public'))
// To create a virtual path prefix, eg: localhost:3000/static/styles/style.css
app.use("/static", express.static("public"));
// To access request body from the pose request made in public/js/home.js
// app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// To get something from the server : Rendering index page
app.get("/", function (req, res) {
    // use res.render to load up an ejs view file
    res.render("pages/index");
});

// To make a post request to the server
app.post('/enter-room', (req, res) => {
    const requestData = req.body;
    res.json({ message: 'POST request received', data: requestData });
    console.log(requestData)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
