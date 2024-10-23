const express = require("express");
const homeRoutes = require("./home.route");
const categoryRoutes = require("./category.route");
const userRoutes = require("./user.route");

module.exports = (app) => {
  const version = "/api/v1";

  app.use(`${version}/`, homeRoutes);
  app.use(`${version}/categories`, categoryRoutes);
  app.use(`${version}/user`, userRoutes);
};
