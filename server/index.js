const express = require('express');
const cors = require('cors');
const path = require('path');
const exp = require('constants');

const app = express();

app.get('/', function(res, req){
    res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});