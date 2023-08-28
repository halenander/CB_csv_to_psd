import 'ag-psd/initialize-canvas';
import { readPsd } from 'ag-psd';
import { writePsd } from 'ag-psd';
import * as fs from 'fs';

const temp_one = fs.readFileSync('/psd-files/Kahala-Q1.psd');
const temp_two = fs.readFileSync('/psd-files/ML-WL-INSIDE.psd');

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
  