const path = require('path');
const fs = require('fs/promises');
const folPath = path.join(__dirname, '/secret-folder');
(async (folPath) => {
  try {
    const dirElements = await fs.readdir(folPath, {withFileTypes: true});
    for (const element of dirElements) {
      if (element.isFile()) {
        const elPath = path.join(folPath, element.name);
        const elSize = (await fs.stat(elPath)).size / 1024;
        console.log(`${path.parse(elPath).name} - ${path.extname(elPath).slice(1)} - ${elSize.toFixed(3)}kb`);
      }
    }
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
})(folPath);
