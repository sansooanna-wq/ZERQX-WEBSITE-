
const express = require("express");
const path = require("path");
const { analyzeLua } = require("./obfuscator");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/status", (req, res) => {
  res.json({
    name: "ZERQX OBFUSCATOR V3",
    status: "online",
    version: "3.0.0"
  });
});

app.post("/api/analyze", (req, res) => {
  try {
    const result = analyzeLua(req.body.source);
    res.json(result);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log("ZERQX V3 running on port " + PORT);
});


