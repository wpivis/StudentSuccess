const express = require('express');

// Init express application
const app = express();
// Start listening on defined port
app.listen(3001, () => {
    console.log('Now listening on port ' + 3001);
});

// Serve React build
app.use(express.static(__dirname + "/SS/dist"));

// Serve react app
app.get("*", (req, res) => {
    console.log(__dirname + "/SS/dist/index.html")
    res.sendFile(__dirname + "/SS/dist/index.html");
});