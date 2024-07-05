//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VYemxESy9CMWp3cWZLOWtWZHJjN3d5WlhUUlZTa3VmMU96dEczQk5GZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVI2NWdsL2wwQ1NMN1cyS3cyNEVLamI2VnlrVHVncUhMZXdObDRCcU1EQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSWtncFluZEs4MFJRQkhMMnFZRFpqV2duNEROaDlzMXJhalZLV01RS1ZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJN1RnYlU4SmVUcGNTYnJEL2UyTGZtZUpuZ2xNbUlOazl4RW5lZ0VLbkY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9IeFY2a1NodWxBUE9KNGYxUkN1TjdiUHZkMzd0dEdJUS9mamlIRWtMMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUyeU5wTXg5TXV3UVNOOUtta0ZnRmg2SmlNMHVUNFY2LzVVUGpSbXg5bFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09xTnBDNzBXaml6M0h0SGduM1l6d29FM3JpZkVZQmRTYWd4Yk0rTXpucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1BrUHBNem9KL1E2cXdReHBabWs5cUJ2ckI0bXBnMFMybndTbktoNVAyWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJQVW9RR1ozUEJQeHFzYXVGeitMb2F6WU8zb2VmT05MSlk5dHB4L1hOemtyOTlTQTdjaU16WDBWQTlKN2x6eDZpVjZDTWJDcXo1U3VZVTE0blJpS2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJZOEtJWmZyNmtrYmowNEVxNDRNZ1ZpLzFUck1MR2hzYzJlYWgwVGphUzV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgxMjI2MTQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk2QkQ3NDA4NEU1Q0JEOUYwOEUwOURBRDk5MDY0MzE1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAxNDQ1OTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im5BTXMxR2pVU0tPWDZ2VFJRbnJaYWciLCJwaG9uZUlkIjoiMGVjNDZiMDItZDUxYS00Mzc1LWIwY2QtYzZmMjNhYTBmNTg5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAwYWViNStUL3VGMUx1cXVYRDdEenZycXBUMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtK3U5VmdmV0FvQXBUUTNJNVNsNjhGS1Nvd009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNEVKU1lRV0QiLCJtZSI6eyJpZCI6Ijk0NzgxMjI2MTQ0OjgyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJLwnZCT8J2QgPCdkJPwnZCU8J2QkiDwnZCK8J2QiPCdkI3wnZCGIPCdkJXwnZCI8J2QjPCdkJQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0picnlmRUdFTVNsbmJRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImUrY3h6RHNJR0IwV0dZU1hGWXBTWjJEbFV4a2grNE5na0Z2U2tOZHUyMUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdqbGVrOVRkN0VJRS85ditlSG1adU9ITEE3VVlUVkFSV3Z5b0lxbkZWeHJtOVlrRnc5N2tRZ1Z3VlJXVHhtWjd6MENKSG12cHhVRzlqUE9MZ1dnbUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5Y2F6YUZVL2I1dlA1Wk45emRrcnZtRzhGTXVHcGdtb0loRHFCQ0Y5akloRXYrTXB6cldNeUZZV3B2WDJCTGU3THNNYlFZVWxXQTVCQjIrSW9xc0xqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgxMjI2MTQ0OjgyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh2bk1jdzdDQmdkRmhtRWx4V0tVbWRnNVZNWklmdURZSkJiMHBEWGJ0dFEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAxNDQ1OTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSC92In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
