const zl = require('zip-lib');
const fs = require('fs');

const lib = {};

lib.zipFile = (object) => {
  try {
    const zip = new zl.Zip();
    
    for (const property of Object.keys(object)) {
      const filePath = `${property}.txt`;
      const file = fs.createWriteStream(filePath);
  
      // Write the property value to the file
      if (Array.isArray(object[property])) {
        object[property].forEach((value) => {
          file.write(`${value}\n`);
        });
      } else {
        file.write(`${object[property]}\n`);
      }
  
      file.end();
      
      // Add the file to the zip archive
      zip.addFile(filePath);
    }
    zip.archive('output.zip').then(() => {
        console.log('done');
    }, (err) => {
        console.log(err);
    });
  } catch(err) {
    return err;
  }
}

lib.newFolder = (name, object) => {
  try {
    for (const property of Object.keys(object)) {
      const filePath = `${__dirname}/output/${name}/${property}.txt`;
      const dirPath = `${__dirname}/output/${name}`;
      
      if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath);
      }
      
      const file = fs.createWriteStream(filePath);
  
      // Write the property value to the file
      if (Array.isArray(object[property])) {
        object[property].forEach((value) => {
          file.write(`${value}\n`);
        });
      } else {
        file.write(`${object[property]}\n`);
      }
      
      file.end();
    }
    return `${__dirname}/output/${name}/`;
  } catch(err) {
    return err;
  }
}

module.exports = lib;