if (process.env.NODE_ENV === "production") {
  // DEBUG: PLEASE CHANGE THIS WHEN WE HAVE A PROD ENVIRONMENT
  console.log('PRODUCTION ON');
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
