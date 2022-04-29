const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


// Declaring and Using of MiddleWare
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('SpaceX Car Inventory is running successfully!!!!');
});

app.listen(port, () => {
    console.log('YAY, My port is running well!!!', port);
})