const fs = require('fs/promises');
const path = require('path');

const oldFolder = path.join(__dirname, 'files');
const newFolder = path.join(__dirname, 'files-copy');

(async function copyDir() {
    try {

      await fs.rm(newFolder, { recursive: true, force: true });
      await fs.mkdir(newFolder, { recursive: true });
      const assets = await fs.readdir(oldFolder);

      for (let el of assets) {
        const old = path.join(oldFolder, el);
        const novel = path.join(newFolder, el);
        await fs.copyFile(old, novel);
      }
      
      console.log('Скопировано');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  })();

