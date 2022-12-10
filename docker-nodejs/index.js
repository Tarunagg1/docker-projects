const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    return res.send("Welcome to express js in node docker")
})

app.listen(PORT, function(){
    console.log('server listening on port ' + PORT);
})




