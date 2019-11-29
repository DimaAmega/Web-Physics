const path = require('path');

module.exports = {
  mode:"development",
  watch: true,
  entry: {
    Scene1: './Sceens/Scene1/core.js',
    Plane: './Modules/Plane.js',
  },
  output: {
    filename: '[name]/[name].js',
    path :path.join(__dirname,'/dist/'),
  },
};  