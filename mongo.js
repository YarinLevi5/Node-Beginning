var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("node-db");
    var myobj = {
        name: "Company Inc",
        address: "Highway 37"
    };
    dbo.collection("node").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

const dotenv = require("dotenv");
dotenv.config();

var pass = process.env.fullStuck;

console.log(`Your password is ${pass}`);