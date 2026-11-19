
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "1mb" }));

// ZERQX Website
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Backend status
app.get("/api/status", (req, res) => {
  res.json({
    name: "ZERQX OBFUSCATOR V3",
    status: "online",
    version: "3.0.0"
  });
});

app.listen(PORT, () => {
  console.log("ZERQX V3 is running on port " + PORT);
});

