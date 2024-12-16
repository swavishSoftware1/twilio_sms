const express = require("express");
const dotenv = require("dotenv");

const app = express();

const PORT = 7000;

dotenv.config();

require("./startups/routes")(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
