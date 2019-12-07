const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/stuff", (request, response) => {
    response.send("Stuff!");
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

