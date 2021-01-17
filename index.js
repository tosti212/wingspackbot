const botSettings = require("./config.json")
const Discord = require("discord.js");
const request = require("request");
const client = new Discord.Client();
const { token, prefix } = require("./config.json")
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();



bot.on("ready", async () => {
console.log(`\n\Jest gotowy do pracy przy ${bot.guilds.cache.size} serwerach i ${bot.users.cache.size} użytkownikach!`);
  
bot.user.setStatus('Online')

setInterval(() => {
  const activities_list = [
  `Ping: [${Math.round(bot.ws.ping)}]`,
  `Nadawanie v2`,
  `wingsclient.pl`
  ];
	
  const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
}, 10000); // Runs this every 10 seconds.
});


bot.on("message", async message => {
  if(!message.guild) return;
    if(prefix === null) prefix = d_prefix;
    
    if(!message.content.startsWith(prefix)) return;
    
    //YOUR CODE
  })

fs.readdir("./cmds", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
      console.log("No commands found to load!");
      return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
      let props = require(`./cmds/${f}`);
      console.log(`${i + 1}: ${f} pl!`);
      bot.commands.set(props.help.name, props);
  });

  bot.on("message", async message => {
    if(!message.guild) return;
      if(prefix === null) prefix = prefix; 
      
      if(!message.content.startsWith(prefix)) return;
      
      let messageArray = message.content.split(" ");
      let command = messageArray[0];
      let args = messageArray.slice(1);
    
      let cmd = bot.commands.get(command.slice(prefix.length).toLowerCase());
      if(cmd) cmd.run(bot, message, args,)
      else{
if (message.content.startsWith(prefix)) {
        message.react('800167617276805182');
      }
} 
    })
})



bot.login(botSettings.token);