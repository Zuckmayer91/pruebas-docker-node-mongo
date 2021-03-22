const mongoose = require('mongoose')

mongoose.connect('mongodb:/mongo/mydatabase')
    .then(db => console.log('Db is connected to', db.connection.host))
    .catch(err => console.err(err));