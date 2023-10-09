// Load Node modules
var express = require("express");
const ejs = require("ejs");
// Initialise Express
var app = express();
// Render static files
app.use(express.static("public"));
// Set the view engine to ejs
app.set("view engine", "ejs");
// Port website will run on
app.listen(8080);

// *** GET Routes - display pages ***
// Root Route
app.get("/", function (req, res) {
  res.render("pages/site");
});

// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";

// //es replication for node.js functionality
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const server = express();
// const port = 5050;

// //create get, post, put, etc functions

// server.get("/", (req, res) => {
//   res.sendFile("site.html", { root: __dirname });
// });

// server.listen(port, () => {
//   console.log(`Now listening on port ${port}`);
// });

// canvas.createElement();

// const buff_one = fs.readFileSync("psd-files/Kahala-Q1.psd");
// const buff_two = fs.readFileSync("psd-files/ML-WL-INSIDE.psd");

// const temp_one = agpsd.readPsd(buff_one);
// console.log(temp_one);
