const express = require("express");
const app = express();

app.post("/login", (req, res) => {

        let mock = require('./mock');

        console.log(req.body);
        res.send(mock);
    }
);

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;
