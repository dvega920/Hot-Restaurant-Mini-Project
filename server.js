const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/stuff", (request, response) => {
    response.send("Stuff!");
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

// JSON 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Empty Array of objects: 
var reservation = [

];

var waitList = [

];

// Express Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// JSON Object when they visit appropriate page:

app.get("/api/reservation", function (req, res) {
    return res.json(reservation);
});

app.get("/api/waitList", function (req, res) {
    return res.json(waitList);
});
