var ServerID = "485545464242896896"; //اي دي السيرفر
var ChannelID = "495324488406138901";// اي دي الروم


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

client.login("NDk1MzIwNjkzMjQwNzU4Mjcz.DpAZww.Iuv6_aoHzbruJtU3-D7dWA4JcTk");