("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
require("../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
let moment = require(`moment-timezone`);
let Welcome = require(`../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/setwelcome`);
let group_participants = async (𝖚𝖕𝖉𝖆𝖙𝖊, 𝖍𝖆𝖜ӄ) => {
let 𝖕𝖋𝖕𝖀𝖘𝖊𝖗;
let 𝕷𝖆𝖙𝖊𝖘𝖙 = 𝖚𝖕𝖉𝖆𝖙𝖊.participants[0];
let 𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆 = await 𝖍𝖆𝖜ӄ.groupMetadata(𝖚𝖕𝖉𝖆𝖙𝖊.id);
let 𝖚𝖘𝖊𝖗𝕹𝖆𝖒𝖊 = await 𝖍𝖆𝖜ӄ.getName(𝖚𝖕𝖉𝖆𝖙𝖊.participants[0]);
try {
𝖕𝖋𝖕𝖀𝖘𝖊𝖗 = await 𝖍𝖆𝖜ӄ.profilePictureUrl(𝖚𝖕𝖉𝖆𝖙𝖊.participants[0], "image");
} catch {
𝖕𝖋𝖕𝖀𝖘𝖊𝖗 = "./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_𝖕𝖋𝖕𝖀𝖘𝖊𝖗.png";
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
await Welcome.findOne(
{
ID: 𝖚𝖕𝖉𝖆𝖙𝖊.id,
},
async (𝕰𝖗𝖗𝖔𝖗, userWel) => {
if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
if (!userWel) return;
if (𝖚𝖕𝖉𝖆𝖙𝖊.action == "add" && !𝕷𝖆𝖙𝖊𝖘𝖙.includes(𝖍𝖆𝖜ӄ.user.id)) {
return await 𝖍𝖆𝖜ӄ
.sendMessage(𝖚𝖕𝖉𝖆𝖙𝖊.id, {
contextInfo: { mentionedJid: [𝖚𝖕𝖉𝖆𝖙𝖊.participants[0]] },
image: { url: 𝖕𝖋𝖕𝖀𝖘𝖊𝖗 },
caption: `*⦓ ©𝐕𝐥𝐤𝐲𝐫𝐞 ༒ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞𝐫 ⦔* 
╔══「 Vlyre 𝐏𝐫𝐨𝐭𝐨® 」
║ *💡 ᴘᴇʀꜱᴏɴ:* @${𝖚𝖘𝖊𝖗𝕹𝖆𝖒𝖊}
║ *🎐 ɢʀᴏᴜᴘ:* ${𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject || ""}
║ *🍀 ᴍᴀᴅᴇ:* ${moment(`${𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.creation}` * 1000)
.tz("Asia/Kolkata")
.format("DD/MM/YYYY HH:mm:ss")}
╚═══════╝


*『 🍯𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐍𝐨𝐭𝐞🍯 』* 
${userWel.message}`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™_",
buttons: [
{
buttonId: prefix + "help",
buttonText: { displayText: prefix + "help" },
type: 1,
},
{
buttonId: prefix + "rules",
buttonText: { displayText: prefix + "rules" },
type: 1,
},
],
headerType: 4,
})
.catch((error) => console.log(error));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else if (𝖚𝖕𝖉𝖆𝖙𝖊.action == "remove") {
return;
}
}
);
};
module.exports = {
Vgrpns: group_participants,
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
