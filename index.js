const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const dbUrl = require("./config");


mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connection.once('open', () => {
    console.log('Connect to MongoDB');
    routes(app);

    const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("its work on 5000"));
})
