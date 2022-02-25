const dotenv = require('dotenv');
const { Client, Intents } = require('discord.js');
const bind = require('./binds.json');

dotenv.config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

    const message = bind.binds[Math.floor(Math.random()*bind.binds.length)]

	if (commandName === 'b') {
		await interaction.reply(message);
	}
    console.log(message);
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);