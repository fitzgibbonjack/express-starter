const express = require("express");
const routes = require("./routes/index.js");
// Configuration
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
app.use("/", routes);
//# sourceMappingURL=index.js.map