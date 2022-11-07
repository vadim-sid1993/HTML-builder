const fs = require('fs');
const fsPromise = require('fs/promises');
const path = require('path');


const pathStyles = path.join(__dirname, 'styles');
const pathNewStyle = path.join(__dirname, 'project-dist', 'bundle.css');
const newStyle = fs.createWriteStream(pathNewStyle, 'utf-8');
  (async () => {

  const stylesAll = await fsPromise.readdir(pathStyles, {recursive: true,   force:   true, withFileTypes: true});
  
  for (let elem of stylesAll) {

    if(elem.isFile() && path.extname(elem.name) === '.css') {
      const pathStyle = path.join(pathStyles, elem.name);
      const readStyle = await fsPromise.readFile(pathStyle, {recursive: true, force:   true});
      newStyle.write(`${readStyle}\n`);
    } 
  };

})();