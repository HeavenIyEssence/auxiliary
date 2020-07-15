module.exports = async client => {
    // status
    client.user.setActivity(`${client.config.prefix}commands`, { type: "PLAYING" });

    // profile picture
    client.user.setAvatar(`${client.config.bot_picture}`);
};
