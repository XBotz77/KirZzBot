let handler = async (m, { conn, usedPrefix }) => {

conn.reply(m.chat, 'Jangan lupa donasi ya kak, biar bot selalu on 24/7 buat kamu<3', m) 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 25000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
╭─「 Donasi 」
│ • Indosat [6285820377971]
│ • Dana  [6285820377969]
│ • Dana  [-]
│ • Qris  [Chat OWNER]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285820377970
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: false
      }}}}}}, {})
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler