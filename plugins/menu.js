
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
      const uptime = runtime(process.uptime());
      const currentTime = Date.now();

      // List of image URLs
      const njabulox = [
        "https://files.catbox.moe/iii5jv.jpg",
        "https://files.catbox.moe/xjeyjh.jpg",
        "https://files.catbox.moe/mh36c7.jpg",
        "https://files.catbox.moe/u6v5ir.jpg",
        "https://files.catbox.moe/bnb3vx.jpg"
      ];

      // Select a random image file
      const randomNjabulourl = njabulox[Math.floor(Math.random() * njabulox.length)];

      const menuMsg = ` 
╰►Hey, : ${pushname}
╭───〔 *GTR-XMD* 〕────┈
├──────────────
│✵│▸ BOT NAME GTR-XMD
╰───────────────⊷
╭─────「 MENU 」───┈⊷
││◦➛ Prefix : ${config.PREFIX}
││◦➛ Mode : PUBLIC
││◦➛ Version : 4.0.0
││◦➛ Uptime : ${uptime}
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

      await sock.sendMessage(from, {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: randomNjabulourl,
              mimetype: 'image/jpeg',
              fileSha256: '',
              fileLength: '',
              pageCount: 0,
              mediaKey: '',
              fileName: 'GTR-XMD MENU',
              fileEncSha256: '',
              directPath: '',
              mediaKeyTimestamp: '',
              jpegThumbnail: '',
            },
            hasMediaAttachment: true,
          },
          body: { text: menuMsg },
          footer: { text: `Pσɯҽɾҽԃ Ⴆყ njabulo` },
          nativeFlowMessage: {
            buttons: [
              {
                name: 'cta_url',
                buttonParamsJson: JSON.stringify({
                  display_text: '📢 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝘾𝙝𝙖𝙣𝙣𝙚𝙡',
                  url: 'https://whatsapp.com/channel/0029Vb6mzVF7tkj42VNPrZ3V',
                  merchant_url: 'https://whatsapp.com/channel/0029Vb6mzVF7tkj42VNPrZ3V',
                }),
              },
              {
                name: 'single_select',
                buttonParamsJson: {
                  title: '𝐕𝐈𝐄𝐖☇ 𝐎𝐏𝐓𝐈𝐎𝐍𝐒 ☑',
                  sections: [
                    {
                      title: '⌜ 𝘾𝙤𝙧𝙚 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 ⌟',
                      highlight_label: '© 丨几匚',
                      rows: [
                        { title: '𝐏𝐢𝐧𝐠', description: 'Check bot response time', id: `ping` },
                        { title: '𝐑𝐞𝐩𝐨', description: 'Get bot repository link', id: `repo` },
                      ],
                    },
                    {
                      title: 'ℹ 𝙄𝙣𝙛𝙤 𝘽𝙤𝙩',
                      highlight_label: '© 丨几匚',
                      rows: [
                        { title: '𝐒𝐞𝐭𝐭𝐢𝐧𝐠𝐬', description: 'Show bot settings', id: `settings` },
                        { title: '𝐒𝐮𝐩𝐩𝐨𝐫𝐭', description: 'Get support information', id: `support` },
                      ],
                    },
                    {
                      title: '📜 𝘾𝙖𝙩𝙚𝙜𝙤𝙧𝙮 𝙈𝙚𝙣𝙪𝙨',
                      highlight_label: '© 丨几匚',
                      rows: [
                        { title: '𝐆𝐞𝐧𝐞𝐫𝐚𝐥𝐌𝐞𝐧𝐮', description: 'General commands', id: `generalmenu` },
                        { title: '𝐒𝐞𝐭𝐭𝐢𝐧𝐠𝐬𝐌𝐞𝐧𝐮', description: 'Bot settings commands', id: `settingsmenu` },
                        { title: '𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬𝐌𝐞𝐧𝐮', description: 'Bot Currency exchange commands', id: `businessmenu` },
                      ],
                    },
                  ],
                },
              },
            ],
            messageParamsJson: {
              limited_time_offer: {
                text: 'GTR-XMD',
                url: 'https://github.com/Fred1e/Fee-Xmd',
                copy_code: 'FREDI',
                expiration_time: currentTime + 3600000,
              },
              bottom_sheet: {
                in_thread_buttons_limit: 2,
                divider_indices: [1, 2],
                list_title: 'Select Command',
                button_title: 'GTR-XMD MENU',
              },
            },
          },
        },
        contextInfo: {
          externalAdReply: {
            title: `⏰ message menu`,
            mediaType: 1,
            previewType: 0,
            thumbnailUrl: randomNjabulourl,
            renderLargerThumbnail: true,
          },
        },
      }, { quoted: msg });
    } catch (e) {
      console.error("❌ Menu Error:", e);
      await sock.sendMessage(msg.key.remoteJid, { text: `❌ ERROR: ${e.message}` }, { quoted: msg });
    }
  }
};
