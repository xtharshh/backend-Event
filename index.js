const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uuid = require('uuid')
require("nodemailer");
const cors = require("cors");
const multer = require('multer');
const cookieParser = require("cookie-parser");

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://backend-event-n51mvr95c-harsh-kumars-projects-52627a31.vercel.app',
    'http://localhost:5000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// Root route handler
app.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'success',
    message: 'Welcome to Event Management System API',
    version: '1.0.0'
  });
});

dotenv.config({path:'./config.env'});

require('./db/conn');

app.use(express.json());
app.use(cookieParser());
//router files
//User API router
app.use(require('./router/auth'));

// Committee APIs router
app.use(require("./router/committee"))
// Event APIs router
// app.use(require('./router/Event'));
// var event = multer({ dest: './router/Event' });
// app.use(event)
app.use(require("./router/event"));
app.use(require("./router/payment"));
app.use(require("./router/menu"));

app.use(require("./router/task"));


//connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server started at ${PORT} port`);
  });

