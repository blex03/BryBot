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

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`)
})

client.on('messageCreate', (message) => {
    if (message.content.toLowerCase() === "hi bry bot") {
        message.reply(`hello ${message.author.username}`)
    }
    
    else if(message.content.toLowerCase() === "flip a coin") {
        const state = Math.floor(Math.random() * 2)
        if (state === 1){
            message.reply('Heads')
        }
        else {
            message.reply('Tails')
        }
    }
    

})


client.login(process.env.DISCORD_TOKEN)

