const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "./src/assets/images";
const outputFolder = "./src/assets/images/resized";

// Çıkış klasörünü oluştur
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

fs.readdirSync(inputFolder).forEach((file) => {
  const inputPath = path.join(inputFolder, file);
  const outputPath = path.join(outputFolder, file);

  sharp(inputPath)
    .resize(1200, 400, {
      fit: "cover",
    })
    .toFile(outputPath, (err) => {
      if (err) {
        console.error("Hata oluştu:", err);
      } else {
        console.log("Boyutlandırıldı:", file);
      }
    });
});
