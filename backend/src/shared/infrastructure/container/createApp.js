const express = require("express");
const cors = require("cors");

const db = require("../database/sqliteClient");
const initializeDatabase = require("../database/initializeDatabase");
const registerRoutes = require("../http/registerRoutes");

function createApp() {
  const app = express();

  initializeDatabase(db);

  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({
      message: "Backend ATS-LTI funcionando correctamente",
    });
  });

  registerRoutes(app, { db });

  return app;
}

module.exports = createApp;
