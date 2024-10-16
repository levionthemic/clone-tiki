const express = require("express");
const homeRoutes = require("./home.route");

module.exports = (app) => {
  const version = "/api/v1";

  app.use(`${version}/`, homeRoutes);
};
