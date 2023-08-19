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
      <ul>
      <input type="file" id="myFile" name="filename"/>

      <input type="submit" value = "Submit"/>
      </ul>
    </div>
  `;
  };
  
  const main = document.createElement("main");
  main.innerHTML = markup(input);
  document.body.appendChild(main);
  