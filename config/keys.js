if (process.env.NODE_ENV === "production") {
  // DEBUG: PLEASE CHANGE THIS WHEN WE HAVE A PROD ENVIRONMENT
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
