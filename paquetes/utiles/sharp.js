//trabajr con imagenes

const sharp = require('sharp');

sharp('original_.webp')
    .resize(80)
    .grayscale()
    .toFile('Nuevo.png');