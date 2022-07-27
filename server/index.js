const express = require('express');
const cors = require('cors');
const path = require('path');
const exp = require('constants');

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get('/', function(req, res){
    res.sendFile(path.resolve('public/index.html'));
});



const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});