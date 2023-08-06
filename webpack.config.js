const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve('./src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Day.js',
    library: {
        name: "Dayjs",
        type: "var"
    }
  },
};