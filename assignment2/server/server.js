    const express = require("express");

    const app = express();
    app.use(express.static('./public'));

    // app.get("/",(req,res) => res.send("Response from the GET request"));

    app.listen(3001, function() {
        console.log('app is running on port 3001!')
    });