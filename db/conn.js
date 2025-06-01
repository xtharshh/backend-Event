const mongoose = require('mongoose');
const DB = "mongodb+srv://akshay:akshay123@cluster0.kc5quoo.mongodb.net/event";

mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('no connection'));
