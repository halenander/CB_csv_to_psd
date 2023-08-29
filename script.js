import { readPsd } from '/node_modules/ag-psd';
import { writePsdBuffer } from '/node_modules/ag-psd';
import * as fs from '/node_modules/fs';
import '/node_modules/ag-psd/initialize-canvas.js';

const buff_one = readFileSync('/psd-files/Kahala-Q1.psd');
const buff_two = readFileSync('/psd-files/ML-WL-INSIDE.psd');

const temp_one = readPsd(buff_one);
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
  