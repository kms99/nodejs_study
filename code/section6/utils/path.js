const path = require("path");

// 진입점(app.js)에 대한 경로
module.exports = path.dirname(require.main.filename);
