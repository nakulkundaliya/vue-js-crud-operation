let express = require("express");
let valueRouter = require("./value");
let principleRouter = require("./principle");

let app = express();

app.use("/value", valueRouter);
app.use("/principle", principleRouter);

module.exports = app;
