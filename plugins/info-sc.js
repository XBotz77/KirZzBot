let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Cie Nyari Esceh🥴 :\n• https://youtube.com/@salehdev8956
`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'Thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler