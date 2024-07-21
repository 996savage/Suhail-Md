const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_16_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NixcbiAgICAgICAgMTEzLFxuICAgICAgICA1OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1LFxuICAgICAgICA5LFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTczLFxuICAgICAgICA3NixcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICA5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM4LFxuICAgICAgICAzMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInFuWFFiTExuTEdaMUxzc0dtbHBNVjhHOGZhZkR4Yk0ybzlVUDlGRzdtQk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFCc0dGSGRqUzZxNWNqVXlRWmw1bVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjZjNjk2NTYtZDFkYS00MGIxLTgxOWUtYjgyYjE2YmJmNzAwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgODQsXG4gICAgICAxNzgsXG4gICAgICAxOTUsXG4gICAgICA0MCxcbiAgICAgIDgwLFxuICAgICAgNTksXG4gICAgICAxMDgsXG4gICAgICAxMDAsXG4gICAgICA1OSxcbiAgICAgIDE5MCxcbiAgICAgIDIwOSxcbiAgICAgIDc2LFxuICAgICAgNTAsXG4gICAgICA2NSxcbiAgICAgIDU5LFxuICAgICAgMTE2LFxuICAgICAgMSxcbiAgICAgIDE4NixcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAxNTMsXG4gICAgICAxNjIsXG4gICAgICAxMDUsXG4gICAgICAxMTgsXG4gICAgICAxMzIsXG4gICAgICAxNDEsXG4gICAgICAyMjEsXG4gICAgICAxNDksXG4gICAgICAxNTUsXG4gICAgICA3MCxcbiAgICAgIDcyLFxuICAgICAgMTQ5LFxuICAgICAgODgsXG4gICAgICA4LFxuICAgICAgMjI2LFxuICAgICAgNjgsXG4gICAgICAyMTcsXG4gICAgICAxNTUsXG4gICAgICAxMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVpUQVZENFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5NTExODUwNzoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTMwMjUwMTU0NTU5MDU6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW5ucmw4UTQ2RDF0QVlZQlNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2aG5SVFVrVW5hMUR0a2Q5ODZDZHhlRnlrUlRLUE96NGNJT3NnUWpKdWxJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNjNzdnNE45Si9scU5qUU5LZEdXbWpLOG5xOXNzRVFMSzNXZk03NkVNTVZlMW5oaVV6S1NubmVZM0FWUDk0Q2JaTENTSmIreE9rdFR5c2luWTkyTEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9hQnViYmV6dnlHL0R1UWxvelNHYUYrUVdYeExCUHRoNEpIaTdHcHB4amJTWWp1d0ZiU0s1RjBNZFBUZmJOa3dNcHpieDZ3M1IxTldxV041RXVZTmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5NTExODUwNzoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1ODU3NjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGVWRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZVZC5qc29uIjogIntcImtleURhdGFcIjpcIm05b1BHaVhjdTVYQ1Qza2FoNDVndkZvdkp4dURHSTBUU1pMdytiNHNPSDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5OTk2Mjk2LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw4XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
