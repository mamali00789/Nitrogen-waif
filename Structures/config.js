require('dotenv').config();

module.exports = {
    WAIFU_TOKEN: process.env.WAIFU_TOKEN, // bot token
    OWNER_ID: "725379419350237254", // your id
    OWNER_TAG: ".itsrobert", // your user tag
    OWNER_LINK: "https://discord.com/users/725379419350237254", // https://discord.com/users/paste-ur-id-here
    DEV_GUILD:"1125008152975380522", // dev guild
    MONGO_DB: process.env.MONGO_DB, // database mongodb

    // spotify for distube
    // If spotify_tracks is true then you can play song from spotify more than 100+ the default is *false*
    // You can get these secret and client_id from here: https://developer.spotify.com/dashboard/applications
    WAIFU_TRACKS: parseBoolean(process.env.WAIFU_TRACKS || false),
    SPOTIFY_SECRET: process.env.SPOTIFY_SECRET,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    YOUTUBE_COOKIE: process.env.YOUTUBE_COOKIE, // youtube cookie to make less lag
    
    MAIN_COLOR: "#2F3136",
    ERR_COLOR: "#ED2828",
    WAIFU_PREFIX: "w!",
    CHANNEL: "1191652368568287322"
}

function parseBoolean(ask) {
    if (typeof (ask) === 'string') {
        ask = ask.trim().toLowerCase();
    }
    switch (ask) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}