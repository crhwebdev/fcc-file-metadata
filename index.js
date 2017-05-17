const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.listen(PORT, ()=>{
    console.log("Running server on port: " + PORT);
});