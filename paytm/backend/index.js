const express = require("express");
const router = require("./routes");
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());
app.use("/api/v1", router);

app.listen(3000);