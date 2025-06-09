module.exports = {
  trigger: "love",
  handle(api, event) {
    api.sendMessage("I love you so much 💖 You're my everything!", event.threadID);
  }
};