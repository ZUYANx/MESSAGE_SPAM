module.exports = {
  trigger: "sad",
  handle(api, event) {
    api.sendMessage("Aww don’t be sad 😢 I'm here with you always 💗", event.threadID);
  }
};