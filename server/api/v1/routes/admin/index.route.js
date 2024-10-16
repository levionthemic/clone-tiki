const express = require("express");
const systemConfig = require("../../../../config/system");
const dashboardRoutes = require("./dashboard.route");

module.exports = (app) => {
  const version = "/api/v1";
  app.use(`${version}/${systemConfig.prefixAdmin}/dashboard`, dashboardRoutes);
};
