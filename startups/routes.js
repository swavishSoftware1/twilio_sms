const express = require("express");
const WhatsappRouter = require("../routes/whatsapp");
const error = require("../middlewares/error");

const routes = (app) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use("/api/whatsapp", WhatsappRouter);
  app.use(error);
};

module.exports = routes;
