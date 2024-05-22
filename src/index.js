const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try {
    await fs.writeFile(fileName, fileContent);
    console.log('File written successfully');
  } catch (error) {
    console.error('Error writing the file:', error);
  }
};

module.exports = { writeFile };
