var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {  
  var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "568csb8i",
	database: "burgers_db"
  })	
};

connection.connect(function(err) {
	if (err) {
		console.error("error connecting db: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;