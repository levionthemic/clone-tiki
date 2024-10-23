const express = require("express");
const controller = require("../../controllers/client/home.controller");

const routes = express.Router();

routes.get("/", controller.index);

routes.get("/categories", controller.getCategories);

module.exports = routes;