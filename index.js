const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express);

const db = mysql.createConnection({
    user: "root",
    host: "localhost", 
    password: "123321",
    database: "reg"
});


app.post('/register', (req, res)=> {
    db.query("INSERT INTO usertable (user, password) VALUES (?, ?)", 
    [user, password], 
    (err, result)=> {
        console.log(err); 
    })
}) 

app.listen(3000, () => {
    console.log("Running Server");
});