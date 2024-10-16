const express = require("express");
require("dotenv").config();

const adminRoutes = require("./api/v1/routes/admin/index.route");
const clientRoutes = require("./api/v1/routes/client/index.route");

const bodyParser = require("body-parser");

const database = require("./config/database");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

database.connect();

adminRoutes(app);
clientRoutes(app);

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
})