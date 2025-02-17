const express = require('express');
const connectDB = require('./mongodb');
const profileRoutes = require('./api/profiles');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', profileRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
