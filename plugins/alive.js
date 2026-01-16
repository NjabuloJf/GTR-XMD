module.exports = {
  command: "alive",
  description: "Check if bot is running",
  category: "info",

  async execute(sock, msg) {
    try {
      const jid = msg.key.remoteJid;
      const sender = msg.key.participant || msg.key.remoteJid;
      const jidName = sender.split("@")[0];

      const date = new Date().toLocaleDateString();
      const time = new Date().toLocaleTimeString();
      const speed = Math.floor(Math.random() * 90 + 10);

      const caption = `
╰►Hey,  @${jidName}!*
╭───〔 *GTR-XMD* 〕──────┈
├──────────────
│✵│▸ Response Speed:* ${speed}ms
╰──────────────────⊷

╭────「 ALIVE SYSTEM 」───┈⊷
││◦➛ *Bot Status:* ✅ Alive & Running
││◦➛ *Time:* ${time}
││◦➛ *Date:* ${date}
││◦➛ *Response Speed:* ${speed}ms
││◦➛ 
││◦➛ *GTR-XMD BOT IS HERE!* 
││◦➛ *🤺INFO:*
││◦➛ Fore info https://dml-tech.online
╰──────────────┈⊷
`;

      await sock.sendMessage(
        jid,
        {
          image: { url: 'https://files.catbox.moe/reypkp.jpg' },
          caption: caption,
          mentions: [sender]
        },
        { quoted: msg }
      );

    } catch (err) {
      console.error("❌ Error in alive command:", err);
      await sock.sendMessage(msg.key.remoteJid, {
        text: `
╭───────────────⭓
│ ❌ *Error checking bot status.*
│ Please try again later.
╰───────────────⭓
        `,
      });
    }
  },
};
