let handler = async (m, { conn }) => {
    const text = `
Kira Repository

Project Script Izumi
Repository: https://github.com/yardanshaq/kira
Report Bug: https://github.com/yardanshaq/kira/issues
Pull Req: https://github.com/yardanshaq/kira/pulls

© 2024 – 2025 Yardan Shaq • All Rights Reserved
    `.trim();

    const q = {
        key: {
            fromMe: false,
            participant: m.sender,
            remoteJid: m.chat,
        },
        message: {
            requestPaymentMessage: {
                amount: {
                    currencyCode: "USD",
                    offset: 0,
                    value: 99999999999,
                },
                expiryTimestamp: Date.now() + 24 * 60 * 60 * 1000,
                amount1000: 99999999999 * 1000,
                currencyCodeIso4217: "USD",
                requestFrom: m.sender,
                noteMessage: {
                    extendedTextMessage: {
                        text: "𝗞 𝗜 𝗥 𝗔",
                    }
                },
                background: {
                    placeholderArgb: 4278190080,
                    textArgb: 4294967295,
                    subtextArgb: 4294967295,
                    type: 1,
                },
            },
        },
    };

    await conn.sendMessage(
        m.chat,
        {
            product: {
                productImage: {
                    url: "https://kiracloud.my.id/RC7vVY.png",
                },
                productId: "32409523241994909",
                title: "yardanshaq",
                description: "",
                currencyCode: "IDR",
                priceAmount1000: String(23 * 2 ** 32 + 1215752192),
                retailerId: "SHAQ",
                url: "https://www.yardanshaq.xyz",
                productImageCount: 5,
                signedUrl:
                    "https:/www.yardanshaq.xyz",
            },
            businessOwnerJid: "216939536380004@lid",
            footer: text,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: false,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363144038483540@newsletter",
                    newsletterName: "yardanshaq",
                },
            },
        },
        { quoted: q }
    );
};

handler.help = ["script"];
handler.tags = ["info"];
handler.command = /^(script|sc)$/i;

export default handler;