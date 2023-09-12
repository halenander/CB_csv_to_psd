// var PSD = require("psd");
// var psd1 = PSD.fromFile("psd-files/Kahala-Q1.psd");
// var psd2 = PSD.fromFile("psd-files/ML-WL-INSIDE.psd");

// psd1.parse();
// psd2.parse();

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
