const login = require("fca-unofficial");
const fs = require("fs");
const path = require("path");

const appState = JSON.parse(fs.readFileSync("appstate.json", "utf-8"));

login({ appState }, (err, api) => {
  if (err) return console.error("❌ Login error:", err);

  api.setOptions({ listenEvents: true });

  const commands = {};
  const commandDir = path.join(__dirname, "commands");

  fs.readdirSync(commandDir).forEach(file => {
    const cmd = require(`./commands/${file}`);
    commands[cmd.trigger.toLowerCase()] = cmd;
  });

  api.listenMqtt((err, event) => {
    if (err) return console.error(err);
    if (event.type !== "message" || !event.body) return;

    const msg = event.body.toLowerCase();
    if (commands[msg]) {
      commands[msg].handle(api, event);
    }
  });

  console.log("✅ GF Bot is now listening on Messenger...");
});
