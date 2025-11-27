 
const express = require("express");
const cors = require("cors");
const devicesRoute = require("./routes/devices");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/devices", devicesRoute);

module.exports = app;
