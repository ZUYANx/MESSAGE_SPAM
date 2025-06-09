const fs = require("fs");
const fca = require("fca-unofficial");

const cookies = require("./cookies.json");
const rawCookie = cookies.map(c => \`\${c.key}=\${c.value}\`).join("; ");

fca({ cookie: rawCookie }, (err, api) => {
  if (err) return console.error("❌ Login failed:", err);

  const appState = api.getAppState();
  fs.writeFileSync("appstate.json", JSON.stringify(appState, null, 2));
  console.log("✅ Success! Saved appstate.json");
});
