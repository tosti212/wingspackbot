
const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
  let w = db.get(`wings_${args[0]}`, `id ${args[2]}`)
  let o = db.get(`ogon_${args[0]}`, `id ${args[2]}`)
  let c = db.get(`czapka_${args[0]}`, `id ${args[2]}`)
  let b = db.get(`bandana_${args[0]}`, `id ${args[2]}`)
  let ch = db.get(`chmurka_${args[0]}`, `id ${args[2]}`)
  let i = db.get(`item_${args[0]}`, `id ${args[2]}`)
  let p = db.get(`pel_${args[0]}`, `id ${args[2]}`)
  if(!w){
    w = 'Brak skrzydeł!'
    }
  if(!o){
    o = 'Brak ogona!'
    }
  if(!c){
    c = 'Brak czapki!'
    }
  if(!b){
    b = 'Brak bandany!'
    }
  if(!ch){
    ch = 'Brak chmurki!'
    }
  if(!i){
    i = 'Brak itemka!'
    }
  if(!p){
    p = 'Brak pelerynki!'
    }


    if(!args[0]) {
      let nadaj = new Discord.MessageEmbed()
  
      .setTitle(`Błąd`)
      .setColor("RED")
      .setDescription(".userinfo **Nazwa gracza**")
      .setTimestamp()
      .setFooter(`Komenda użyta przez: ${message.member.user.username} (${message.member.id})`)
      message.channel.send(nadaj)
  }

  if(args[0] === `${args[0]}`) {

    let wings1 = new Discord.MessageEmbed()
    
    
        .setTitle(`Informacje o użytkowniku ${args[0]}`)
        .setColor("GREEN")
        .setDescription(`Skrzydła: **${w}** \n\ Ogon: **${o}** \n\ Czapka: **${c}** \n\ Bandana: **${b}** \n\ Chmurka: **${ch}** \n\ Itemek: **${i}** \n\ Peleryna: **${p}** `)
        .setThumbnail(`https://cravatar.eu/helmavatar/${args[0]}/190.png`)
        .setTimestamp()
        .setFooter(`Komenda użyta przez przez: ${message.member.user.username}`)

    message.channel.send(wings1)


  }
  
}

  module.exports.help = {
    name: "userinfo"
  }