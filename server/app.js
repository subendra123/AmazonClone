require("dotenv").config();
const mongoose = require("mongoose")
const express = require("express");
const app = express();
require("./db/conn");

const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cors());
app.use(router);

const port = 3000;


app.listen(port, () => {
    console.log(`server is runnig on port ${port}`);
})

DefaultData();

