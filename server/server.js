require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
    res.send('Language Learning App API'); 
}); 

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
}); 