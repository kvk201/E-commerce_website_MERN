    const express = require("express");

    const app = express();
    app = express.static('public');
    app.use('/', app);

    app.listen(3000, function() {
        console.log('app is running on port 3000!')
    });