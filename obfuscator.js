
function analyzeLua(source) {
  if (typeof source !== "string" || !source.trim()) {
    throw new Error("Lua source cannot be empty.");
  }

  if (source.length > 1000000) {
    throw new Error("Source exceeds the 1 MB limit.");
  }

  const lines = source.split(/\r\n|\r|\n/);

  const warnings = [];

  const checks = [
    {
      pattern: /\bloadstring\s*\(/,
      message: "Dynamic code execution detected."
    },
    {
      pattern: /\bHttpGet\s*\(/,
      message: "HTTP source retrieval detected."
    },
    {
      pattern: /\bgetfenv\s*\(/,
      message: "Environment access detected."
    },
    {
      pattern: /\bsetfenv\s*\(/,
      message: "Environment modification detected."
    }
  ];

  for (const check of checks) {
    if (check.pattern.test(source)) {
      warnings.push(check.message);
    }
  }

  return {
    name: "ZERQX OBFUSCATOR V3",
    version: "3.0.0",
    language: "Lua / Luau",
    status: "analyzed",
    statistics: {
      characters: source.length,
      lines: lines.length,
      words: source.trim().split(/\s+/).length
    },
    warnings,
    source
  };
}

module.exports = { analyzeLua };
