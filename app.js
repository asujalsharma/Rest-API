const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceroute');



const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// Atlas MongoDB connection setup
mongoose.connect("mongodb+srv://asujalsharma:9P2gypnK1BLMcAKL@cluster0.hwcfg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));


app.use('/api/services', serviceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
