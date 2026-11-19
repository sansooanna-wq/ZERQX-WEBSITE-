
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.json({
    name: "ZERQX OBFUSCATOR V3",
    status: "online",
    version: "3.0.0"
  });
});

app.listen(PORT, () => {
  console.log(`ZERQX V3 running on port ${PORT}`);
});
