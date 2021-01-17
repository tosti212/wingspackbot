const Discord = require("discord.js")
const fs = require('fs');
const path = require('path');
const db = require("quick.db")

module.exports.run = async (bot, message, args, user) => {

    let perm = new Discord.MessageEmbed()
    
    .setTitle(`Błąd`)
    .setColor("RED")
    .setDescription("Aby nadawać kosmetyki musisz posiadać role Nadawanie")
    .setTimestamp()
    .setFooter(`Komenda użyta przez: ${message.member.user.username} (${message.member.id})`)


    if(!message.member.roles.cache.has('800209989423202314')) return message.channel.send(perm) 
    
    if(!args[0]) {
        let nadaj = new Discord.MessageEmbed()
    
        .setTitle(`Błąd`)
        .setColor("RED")
        .setDescription("**Musisz użyć komendy .nadaj **<typ kosmetyku> <nick> <id>")
        .setTimestamp()
        .setFooter(`Komenda użyta przez: ${message.member.user.username} (${message.member.id})`)
        message.channel.send(nadaj)
    }

    if(args[0] === "skrzydła") {
        if(!args[1]) {
            return message.channel.send("Wpisz nick")
        }

        if(!args[2]) {
            return message.channel.send("Wpisz id")
        }
        
        fs.appendFileSync('html/skrzydła.txt', `${args[1]}:${args[2]}\n`)

        db.set(`wings_${args[1]}`,`id ${args[2]}`)


        let wings1 = new Discord.MessageEmbed()
    
        .setTitle(`Nadawanie Skrzydeł`)
        .setColor("GREEN")
        .setDescription(`Nick: **${args[1]}** \n\ Id: **${args[2]}** \n\ Nadał: ${message.author}`)
        .setThumbnail(`https://cravatar.eu/helmavatar/${args[1]}/190.png`)
        .setTimestamp()
        .setFooter(`Nadano przez: ${message.member.user.username}`)
        message.channel.send(wings1)

    }

    if(args[0] === "ogon") {
        if(!args[1]) {
            return message.channel.send("Wpisz nick")
        }

        if(!args[2]) {
            return message.channel.send("Wpisz id")
        }

        fs.appendFileSync('html/ogon.txt', `${args[1]}:${args[2]}\n`)
        db.set(`ogon_${args[1]}`,`id ${args[2]}`)

        let wings1 = new Discord.MessageEmbed()
    
        .setTitle(`Nadawanie Ogonów`)
        .setColor("GREEN")
        .setDescription(`Nick: **${args[1]}** \n\ Id: **${args[2]}** \n\ Nadał: ${message.author}`)
        .setThumbnail(`https://cravatar.eu/helmavatar/${args[1]}/190.png`)
        .setTimestamp()
        .setFooter(`Nadano przez: ${message.member.user.username}`)
        message.channel.send(wings1)

    }
    if(args[0] === "item") {
        if(!args[1]) {
            return message.channel.send("Wpisz nick")
        }

        if(!args[2]) {
            return message.channel.send("Wpisz id")
        }

        fs.appendFileSync(' html/item.txt', `${args[1]}:${args[2]}\n`)
        db.set(`item_${args[1]}`,`id ${args[2]}`)

        let wings1 = new Discord.MessageEmbed()
    
        .setTitle(`Nadawanie itemów`)
        .setColor("GREEN")
        .setDescription(`Nick: **${args[1]}** \n\ Id: **${args[2]}** \n\ Nadał: ${message.author}`)
        .setThumbnail(`https://cravatar.eu/helmavatar/${args[1]}/190.png`)
        .setTimestamp()
        .setFooter(`Nadano przez: ${message.member.user.username}`)
        message.channel.send(wings1)

    }

    if(args[0] === "czapka") {
        if(!args[1]) {
            return message.channel.send("Wpisz nick")
        }

        if(!args[2]) {
            return message.channel.send("Wpisz id")
        }

        fs.appendFileSync('html/czapka.txt', `${args[1]}:${args[2]}\n`)
        db.set(`czapka_${args[1]}`,`id ${args[2]}`)

        let wings1 = new Discord.MessageEmbed()
    
        .setTitle(`Nadawanie Czapek`)
        .setColor("GREEN")
        .setDescription(`Nick: **${args[1]}** \n\ Id: **${args[2]}** \n\ Nadał: ${message.author}`)
        .setThumbnail(`https://cravatar.eu/helmavatar/${args[1]}/190.png`)
        .setTimestamp()
        .setFooter(`Nadano przez: ${message.member.user.username}`)
        message.channel.send(wings1)

    }

    if(args[0] === "bandana") {
        if(!args[1]) {
            return message.channel.send("Wpisz nick")
        }

        if(!args[2]) {
            return message.channel.send("Wpisz id")
        }

        fs.appendFileSync('html/bandana.txt', `${args[1]}:${args[2]}\n`)
        db.set(`bandana_${args[1]}`,`id ${args[2]}`)

        let wings1 = new Discord.MessageEmbed()
    
        .setTitle(`Nadawanie Bandan`)
        .setColor("GREEN")
        .setDescription(`Nick: **${args[1]}** \n\ Id: **${args[2]}** \n\ Nadał: ${message.author}`)
        .setThumbnail(`https://cravatar.eu/helmavatar/${args[1]}/190.png`)
        .setTimestamp()
        .setFooter(`Nadano przez: ${message.member.user.username}`)
        message.channel.send(wings1)

    }

    if(args[0] === "chmurka") {
        if(!args[1]) {
            return message.channel.send("Wpisz nick")
        }

        if(!args[2]) {
            return message.channel.send("Wpisz id")
        }

        fs.appendFileSync('html/chmurka.txt', `${args[1]}:${args[2]}\n`)
        db.set(`chmurka_${args[1]}`,`id ${args[2]}`)

        let wings1 = new Discord.MessageEmbed()
    
        .setTitle(`Nadawanie Chmurek`)
        .setColor("GREEN")
        .setDescription(`Nick: **${args[1]}** \n\ Id: **${args[2]}** \n\ Nadał: ${message.author}`)
        .setThumbnail(`https://cravatar.eu/helmavatar/${args[1]}/190.png`)
        .setTimestamp()
        .setFooter(`Nadano przez: ${message.member.user.username}`)
        message.channel.send(wings1)

    }
    
    if(args[0] === "peleryna") {
        if(!args[1]) {
            return message.channel.send("Wpisz nick")
        }

        if(!args[2]) {
            return message.channel.send("Wpisz id")
        }

        fs.appendFileSync('html/peleryna.txt', `${args[1]}:${args[2]}\n`)
        db.set(`pel_${args[1]}`,`id ${args[2]}`)

        let wings1 = new Discord.MessageEmbed()
    
        .setTitle(`Nadawanie Peleryny`)
        .setColor("GREEN")
        .setDescription(`Nick: **${args[1]}** \n\ Id: **${args[2]}** \n\ Nadał: ${message.author}`)
        .setThumbnail(`https://cravatar.eu/helmavatar/${args[1]}/190.png`)
        .setTimestamp()
        .setFooter(`Nadano przez: ${message.member.user.username}`)
        message.channel.send(wings1)

    }

    
}

  module.exports.help = {
    name: "nadaj"
  }