const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://app.koyeb.com/"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="vatvar78@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SoViYa" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94773824266";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94773824266";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_49_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNCxcbiAgICAgICAgNjksXG4gICAgICAgIDgyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQzLFxuICAgICAgICA5OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4LFxuICAgICAgICA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgODAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICA0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQyLFxuICAgICAgICA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk5LFxuICAgICAgICA1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFPLzdaYW8vc2lZcHVJZjQrSE9wZFZwRzNKR0hoZU1mNkZRbUpDTitrNlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjI0T0ZYaUNWUmdhSGZXVUVJMU5DREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGExNzliMTAtNDFlMy00MjVjLTg0YmQtMDJlMjQ5NjgzNjU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgNjYsXG4gICAgICA0MixcbiAgICAgIDkyLFxuICAgICAgMjUxLFxuICAgICAgMTM4LFxuICAgICAgMjMyLFxuICAgICAgNzcsXG4gICAgICA2MCxcbiAgICAgIDcsXG4gICAgICAxNSxcbiAgICAgIDQ0LFxuICAgICAgNjIsXG4gICAgICA5NyxcbiAgICAgIDIxOCxcbiAgICAgIDc3LFxuICAgICAgMTY4LFxuICAgICAgMTc1LFxuICAgICAgMTIxLFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDY5LFxuICAgICAgMTIsXG4gICAgICA0NixcbiAgICAgIDIzNixcbiAgICAgIDQyLFxuICAgICAgMTM1LFxuICAgICAgOTcsXG4gICAgICA3MyxcbiAgICAgIDEwMSxcbiAgICAgIDk5LFxuICAgICAgOSxcbiAgICAgIDkxLFxuICAgICAgMTc3LFxuICAgICAgOCxcbiAgICAgIDI1MSxcbiAgICAgIDIxNyxcbiAgICAgIDkxLFxuICAgICAgMjA5LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVRDTjFTM0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzczODI0MjY2OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiLlxcblxcblxcbvCdkaxcXG5cXG5cXG5cXG5cXG7wnZG5XFxuXFxuXFxuXFxuXFxu8J2RuVxcblxcblxcblxcblxcbvCdkbZcXG5cXG5cXG5cXG5cXG7wnZG5XFxuXFxuXFxuXFxu8J2fsPCdn6zwnZ+wXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxu8JKNmVwiLFxuICAgIFwibGlkXCI6IFwiNjc3NzUxNTQ0MTc3NjU6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXJVNGNjQkVOYTJnTG9HR0RzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2TkFVTGNZdVdtTmYvck1BeHVKMlhNeHVINDVqVGc5MzNJWjd0RjVzSGdBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNLNjNWREMyZEhBNkhXYllib2VibmliNG5CMTd1WFdJMGZTbHlKNDYxUUVhMXZzUkZNanorL1NraThaN1dBRHlGTUtZYUxvWEZYVFJaTGt6UndzTUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFibjVFelpjNDZmWEc5WHRBYkJVRGs5MUFyekFiaWRCa0ZZK3NEUytsM2NuNDFORzFMTHBIOGY3YkVualdUL2VRa1Frd3pEQTlkQVZ1NW1ndXdHMkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzczODI0MjY2OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjI1NDU1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNBWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0FZLmpzb24iOiAie1wia2V5RGF0YVwiOlwibHp0bFdzeG0xR3JVc2FDYU4vdys4OFlqYm04YnVLMmZndU9Ldmo0Wnd5MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTg5MzMzMjIsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SoViYa-XMD",
  ownername:process.env.OWNER_NAME|| "Sovidu-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
