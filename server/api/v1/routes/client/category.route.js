const express = require("express");
const controller = require("../../controllers/client/category.controller");

const routes = express.Router();

routes.get("/:categoryId", controller.index);

module.exports = routes;