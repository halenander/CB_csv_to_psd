const express = require("express");
const agpsd = require("ag-psd");
const fs = require("fs");
const canvas = require("ag-psd/initialize-canvas");

const server = express();
const port = 5050;

//create get, post, put, etc functions

server.get("/", function (req, res) {
  res.sendFile("site.html", { root: __dirname });
});

server.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

canvas.createElement();

const buff_one = fs.readFileSync("psd-files/Kahala-Q1.psd");
const buff_two = fs.readFileSync("psd-files/ML-WL-INSIDE.psd");

const temp_one = agpsd.readPsd(buff_one);
console.log(temp_one);

const updateWeb = (update) => {
  let main = document.querySelector("main"); // main is an element
  main.innerHTML = markup(input);
  console.info(update);
};

const input = {
  name: "input document",
};

const markup = (input) => {
  return `
    <div>
      <h3>Upload Document</h3>
      <body>
        Upload csv file:
        <br><br>
        <input type="file" id="myFile" name="filename"/>
        <input type="submit" value = "submit"/>
      </body>
    </div>
  `;
};

const main = document.createElement("main");
main.innerHTML = markup(input);
document.body.appendChild(main);
