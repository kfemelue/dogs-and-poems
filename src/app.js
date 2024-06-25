const express = require('express'), 
app = express(), 
cors = require('cors'),
port = 3000

// View engine for Server Side Rendering
app.set("views", "src/views")
app.set("view engine", "ejs");

// Middleware
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Server

app.get("/", (req, res, next)=>{
    res.status(200).send("Hello World")
})





app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}.`)
})
