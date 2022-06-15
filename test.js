// connecting modules.
var express = require('express');
var mysql = require('mysql'); 
var app     = express();
var conn = mysql.createConnection({
  database: 'TestNode',
  host: "localhost",
  user: "root",
  password: ""
});
 
app.set('view engine', 'hbs');
app.use('/public', express.static('public'));
 
 
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
})

 
conn.query('SELECT name FROM hello WHERE ID = 1', function(error, result, fields){
    console.log(result);    // как передать этот параметр? \( X_X)/
    app.get('/test', function (req, res) {
        res.render('test', { params: result });     // <-- здесь трабл.
    });
});
conn.end();
 
console.log('Server is starting.. ');
// port 8000
app.listen(8000);