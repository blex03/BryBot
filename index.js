import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits, Guild } from 'discord.js'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

const banned_users = []


client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`)
})

client.on('messageCreate', (message) => {
    if (message.content.toLowerCase() === "hi bry bot") {
        if (banned_users.includes(message.author.username)) {
            message.reply('screw off')
        }
        else {
            message.reply(`hello ${message.author.username}`)
        }
    }

    else if(message.content.toLowerCase() === "flip a coin") {
        if (banned_users.includes(message.author.username)) {
            message.reply('screw off')
        }

        else {
            const state = Math.floor(Math.random() * 2)
            if (state === 1){
                message.reply('Heads')
            }
            else {
                message.reply('Tails')
            }
        }
    }

    else if(message.content.toLowerCase() === 'roll a die') {
        const num = Math.floor(Math.random() * (7 - 1) + 1)
        message.reply(`${num}`)
    }
    
    

})


client.login(process.env.DISCORD_TOKEN)

