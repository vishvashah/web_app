var url = "mongodb://localhost:27017/web_app";

// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;

// make client connect to mongo service
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    // print database name
   // console.log("db object points to the database : " + db.databaseName);
    // after completing all the operations with db, close it.
    db.close();
});