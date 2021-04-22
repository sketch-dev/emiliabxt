module.exports = {
  name: "djkj",
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message) => {
    message.channel.send(`**Pong** ${client.ws.ping}`);
  }
  
}