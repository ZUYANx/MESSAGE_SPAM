module.exports = {
  trigger: "hi",
  handle(api, event) {
    api.sendMessage("Hey love 💕 How are you today?", event.threadID);
  }
};