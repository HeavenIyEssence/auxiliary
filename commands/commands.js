const axios = require('axios');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

	// bot commander cmds
	var ownerEmbed = new Discord.MessageEmbed()
		.setColor(0xff8c00)
		.setTitle(`**Bot Owner: Commands**`)
		.addField(`\`${client.config.prefix}restart\``, `Restarts the bot`)
		.addField(`\`${client.config.prefix}list\``, `Whitelists user to use bot in their server`)

	// owner cmds
	var serverOwnedEmbed = new Discord.MessageEmbed()
		.setColor(0xf54242)
		.setTitle(`**Server Owner: Commands**`)
		.addField(`\`${client.config.prefix}bind #\``, `Binds the server with the provided group ID (#)`)
		.addField(`\`${client.config.prefix}unbind\``, `Unbinds the server from the binded group ID previously set`)
		.addField(`\`${client.config.prefix}set # username1, username2, etc...\``, `Set # ${client.config.experience_name} for all profiles of provided usernames `)

	// officer cmds
	var officerEmbed = new Discord.MessageEmbed()
		.setColor(0x28F6FF)
		.setTitle(`**${client.config.officer_role}: Commands**`)
		.addField(`\`${client.config.prefix}add # username1, username2, etc...\``, `Adds # ${client.config.experience_name} to all profiles of provided usernames`)
		.addField(`\`${client.config.prefix}remove # username1, username2, etc...\``, `Removes # ${client.config.experience_name} from all profiles of provided usernames`)
		.addField(`\`${client.config.prefix}blacklist\``, `Blacklists a user from the group, which can only be executed by users with the HICOM role`)

	// global cmds
	var globalEmbed = new Discord.MessageEmbed()
		.setColor(0x21ff7a)
		.setTitle(`**Global: Commands**`)
		.addField(`\`${client.config.prefix}commands\``, `Displays all of the commands`)
		.addField(`\`${client.config.prefix}verify rblx_username\``, `Verifies your ROBLOX account (rblx_username) with your Discord account--simply makes sure you're not a robot`)
		.addField(`\`${client.config.prefix}view rblx_username\``, `View the profile of the given username (rblx_username)`)
		.addField(`\`${client.config.prefix}ranks\``, `View the XP requirements for all ranks found in the binded group`)
		.addField(`\`${client.config.prefix}leaderboard\``, `Displays a list of the top 5 users with the most XP in the group`)

	if (message.author.id === client.config.owner_id){
		await message.author.send(ownerEmbed)
	}

	await message.author.send(officerEmbed);
	return message.author.send(globalEmbed);

};

exports.info = {
    names: ["help", "commands", "cmds"],
    usage: 'help',
    description: 'Statistical information'
};
