import slider1 from "../assets/images/resized/slider1.jpg";
import slider2 from "../assets/images/resized/slider2.jpg";
import slider3 from "../assets/images/resized/slider3.jpg";

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "./src/assets/images";
const outputFolder = "./src/assets/images/resized";

// Klasör oluştur
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

fs.readdirSync(inputFolder).forEach((file) => {
  const inputPath = path.join(inputFolder, file);
  const outputPath = path.join(outputFolder, file);

  sharp(inputPath)
    .resize(1200, 400) // Genişlik ve yükseklik
    .toFile(outputPath, (err) => {
      if (err) {
        console.error("Error resizing file:", file, err);
      } else {
        console.log("Resized:", file);
      }
    });
});
