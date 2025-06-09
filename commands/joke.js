module.exports = {
  trigger: "joke",
  handle(api, event) {
    const jokes = [
      "Why don’t scientists trust atoms? Because they make up everything! 😂",
      "Are you French? Because Eiffel for you! 😘",
      "Do you have a name, or can I call you mine? 💞"
    ];
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    api.sendMessage(random, event.threadID);
  }
};