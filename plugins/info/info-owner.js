let handler = async (m, { conn }) => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Yardan Shaq
ORG:Yardan Shaq
TITLE:Epictetus, Enchiridion — Chapter 1 (verse 1)
EMAIL;type=INTERNET:yshaff040302@gmail.com
TEL;type=CELL;waid=27784921846:+27784921846
ADR;type=WORK:;;2-chōme-7-5 Fuchūchō;Izumi;Osaka;594-0071;Japan
URL;type=WORK:https://www.instagram.com/shaqsyr
X-WA-BIZ-NAME:Yardan Shaq
X-WA-BIZ-DESCRIPTION:𝙊𝙬𝙣𝙚𝙧 𝙤𝙛 𝙆𝙞𝙧𝙖
X-WA-BIZ-HOURS:Mo-Su 00:00-23:59
END:VCARD`;

    const q = {
        key: {
            fromMe: false,
            participant: "27784921846@s.whatsapp.net",
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: "Yardan Shaq",
                vcard,
            },
        },
    };

    await conn.sendMessage(
        m.chat,
        {
            contacts: {
                displayName: "Yardan Shaq",
                contacts: [{ vcard }],
            },
            contextInfo: {
                forwardingScore: 999,
                isForwarded: false,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363144038483540@newsletter",
                    newsletterName: "yardanshaq",
                },
                externalAdReply: {
                    title: "© 2024–2025 Kira Project",
                    body: "Contact the Owner via WhatsApp",
                    thumbnailUrl: "https://files.catbox.moe/fxt3xx.jpg",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        },
        { quoted: q }
    );
};

handler.help = ["owner"];
handler.tags = ["info"];
handler.command = /^(owner|creator)$/i;

export default handler;
