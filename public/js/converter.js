import * as fs from 'fs';
import 'ag-psd/initialize-canvas'; // only needed for reading image data and thumbnails
import { readPsd } from 'ag-psd';

const buffer = fs.readFileSync('/Kahala-Q1.psd');

// read only document structure
const psd1 = readPsd(buffer, { skipLayerImageData: true, skipCompositeImageData: true, skipThumbnail: true });
console.log(psd1);

// read document structure and image data
// const psd2 = readPsd(buffer);
// console.log(psd2);
// by defaults `canvas` field type is HTMLCanvasElement, so it needs to be cast to `any`
// or node-canvas `Canvas` type, in order to call `toBuffer` method
// fs.writeFileSync('layer-1.png', (psd2.children[0].canvas as any).toBuffer());



const updateWeb = (update) => {
  let main = document.querySelector("main");
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
