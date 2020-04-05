const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

// Load env file - Access environmental variables through here 
dotenv.config({path: './config.env'});

const app = express();

// Connecting Profile page routes to server
app.use('/api/v1/profile', require('./routes/profile'));

const port = process.env.PORT || 8000;

// Allows app to live on serverside and check if space is properly working
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
})