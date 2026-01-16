const config = require('../config');

function runtime(seconds) {
  seconds = Number(seconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
}

module.exports = {
  command: "menu",
  description: "Show full stylish bot menu.",
  react: "🚘",
  category: "main",

  execute: async (sock, msg) => {
    try {
      const from = msg.key.remoteJid;
      const sender = msg.key.participant || from;
      const pushname = msg.pushName || "there";

      const menuMsg = `
      
      ╰►Hey,  : ${pushname}
╭───〔 *GTR-XMD* 〕────┈
├──────────────
│✵│▸ BOT NAME GTR-XMD
╰───────────────⊷

╭─────「 MENU 」───┈⊷
││◦➛ Prefix : ${config.PREFIX}
││◦➛ Mode : PUBLIC
││◦➛ Version : 4.0.0
││◦➛ Uptime : ${runtime(process.uptime())}
├──────────────
││◦➛
││◦➛DOWNLOAD & MEDIA
││◦➛ dl                    
││◦➛ Apk                   
││◦➛ Facebook              
││◦➛ Song                  
││◦➛ Video                 
││◦➛ TikTok                
││◦➛ Vv                    
││◦➛ Cat                   
││◦➛ Getpp                 
││◦➛ Dp                    
││◦➛ Weather               
├──────────────
││◦➛
││◦╰► AI & GENERAL
││◦➛ Aisummary             
││◦➛ Joke                  
││◦➛ Wabeta               
││◦➛ Alive                 
││◦➛ Uptime                
││◦➛ pi                  
││◦➛ Menu                  
├──────────────
││◦➛
││◦╰► GROUP MANAGEMENT
││◦➛ Promote               
││◦➛ Demote                
││◦➛ Kickall               
││◦➛ Tagall                
││◦➛ Hidetag               
││◦➛ Mute                  
││◦➛ Unmute                
││◦➛ Delete                
││◦➛ Join                  
├──────────────
││◦➛
││◦╰► OWNER & CONTROL
││◦➛ Owner                 
││◦➛ Block                 
││◦➛ Unblock               
││◦➛ Pair                  
╰──────────────┈⊷
`;

      await sock.sendMessage(
        from,
        {
          image: { url: 'https://files.catbox.moe/mh36c7.jpg' },
          caption: menuMsg,
          contextInfo: {
          mentionedJid: [sender],
          externalAdReply: {
            title: "GTR-XMD",
            mediaType: 1,
            previewType: 0,
            thumbnailUrl: 'https://files.catbox.moe/mh36c7.jpg',
            renderLargerThumbnail: true,
            }
          }
        },{ quoted: msg });

    } catch (e) {
      console.error("❌ Menu Error:", e);
      await sock.sendMessage(
        msg.key.remoteJid,
        { text: `❌ ERROR: ${e.message}` },
        { quoted: msg }
      );
    }
  }
};
