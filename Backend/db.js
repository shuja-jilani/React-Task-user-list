const mongoose = require('mongoose');

function connectToMongo() {
    const mongoURI = "mongodb+srv://shujajilani:cutenunu@cluster0.bzwfzcq.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(mongoURI, {

    })
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Connection error: "));
    db.once('open', function(){
        console.log("Connexted");
    })
}

module.exports = connectToMongo;