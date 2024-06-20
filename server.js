const express = require('express')
const cors = require('cors')
const app = express();
const todoRoutes = require('./routes/todoRoutes')
const connectDB = require('./Config/db');

// env config
require('dotenv').config();

// middleware
app.use(express.json());
app.use(cors());

// database connection call
connectDB();

app.use(todoRoutes);

// importing default port from env
const port = process.env.PORT || 4000

// app listen
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})