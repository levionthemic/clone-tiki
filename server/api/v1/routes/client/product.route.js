const express = require("express");
const controller = require("../../controllers/client/product.controller");

const routes = express.Router();

routes.get("/", controller.index);

routes.get("/detail/:productId", controller.detail);

routes.get("/topdeal", controller.topdeal);

module.exports = routes;