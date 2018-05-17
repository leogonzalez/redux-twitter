if (process.env.NODE_ENV === "production") {
  // DEBUG: PLEASE CHANGE THIS WHEN WE HAVE A PROD ENVIRONMENT
  module.export = require("./prod");
} else {
  module.export = require("./dev");
}
