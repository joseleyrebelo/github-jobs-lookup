const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes.js");

const main = () => {
  // Quick Abstractions
  const app = express();

  // Parsing incoming request
  app.use(bodyParser.json());

  // Establishing headers with requester
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE"
    );

    next();
  });

  app.use("/api", routes);

  // Setup - Errors fallbacks

  // Replies 404 if nothing matches
  app.use((req, res, next) => {
    const error = new HttpError("Could not find this route.", 404);
    throw error;
  });

  // Replies 500 in case of errors
  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "An unknown error occurred!" });
  });

  // Listen to port 5200
  console.log("Listening to port 5200...");
  app.listen(5200);
};

try {
  main();
} catch (error) {
  console.log(error);
}
