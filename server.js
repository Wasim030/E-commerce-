const express = require('express');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');
const cors = require('cors');

mongoose.connect(
    "mongodb+srv://wasim:wasim%40030@cluster0.tl9zz.mongodb.net/myDatabase?retryWrites=true&w=majority"
)
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "Content-type",
            'Authorization',
            'Cache-control',
            'Expires',
            'pragma'
        ],
        credentials: true
    })
);

app.use(cookieparser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
