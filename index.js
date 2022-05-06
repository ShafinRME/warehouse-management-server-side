const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// Pass: eQU8kt5khRTkKwgQ
// User: SpaceX-Car-House
// Declaring and Using of MiddleWare
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@spacex-car-house.t231t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('He he connected bro connected');
    // perform actions on the collection object
    client.close();
});


app.get('/', (req, res) => {
    res.send('SpaceX Car House is running successfully!!!!');
});

app.listen(port, () => {
    console.log('YAY, My port is running well!!!', port);
})