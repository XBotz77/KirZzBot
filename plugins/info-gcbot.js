let handler = async (m, { conn, usedPrefix }) => { 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 25000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `Untuk Menghindari Admin Group Marah:'v Silahkan Cek Chat Private Bot Untuk Link Group KirZzBot`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      conn.reply(m.sender, `Group KirZzBot : https://chat.whatsapp.com/JZX89pI4fJWKCgihHDdF1O`, m)
}
handler.help = ['gcbot']
handler.tags = ['main', 'new']
handler.command = /^(gcbot)$/i

module.exports = handler