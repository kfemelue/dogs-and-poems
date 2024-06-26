const express = require('express'),
app = express(),
cors = require('cors'),
port = 3000;
const {getDogPoem, fetchDog, fetchPoem} = require("./controllers/controller")

// View Engine and Views
app.set("views", "src/views");
app.set("view engine", "ejs");

// Middleware
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Server
app.get("/", getDogPoem)








app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}.`)
})
