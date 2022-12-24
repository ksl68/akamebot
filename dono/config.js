const fs = require("fs")
const chalk = require("chalk")

//===================================== //
// MUDANÇAS DE LOGOS:
global.log0 = "https://telegra.ph/file/990081cbad43c561aa621.jpg" 
global.thumb = "https://telegra.ph/file/990081cbad43c561aa621.jpg"
global.err4r = "https://telegra.ph/file/990081cbad43c561aa621.jpg"
//=====================================\\
// ALTERAÇÕES DE DONO E BOT:
global.numerodonoa = ["556593065507"] 
global.NomeDoBot = "𝐀𝐤𝐚𝐦𝐞 𝐛𝐨𝐭 𝐤𝐢𝐥𝐥"
global.linkgrupss = "https://chat.whatsapp.com/FT7KkqGCDg3HRSKhRJLdjC"
global.prefix = "/"
global.NickDono = "𝐘𝐮𝐫𝐢 𝐌𝐨𝐝𝐳"
global.websitex = "https://youtube.com/c/YURIMODZ"
global.lolhuman = "RelzzAPIs" // NÃO ALTERE AQUI...
global.banChats = false
global.wlcm = []
global.banChats = false
global.gcrevoke = [] 
global.packname = "© Copyright by AKAME-MD "
global.packname2 = `https://youtube.com/c/YURIMODZ`
global.author = "𝐘𝐮𝐫𝐢 𝐌𝐨𝐝𝐳"
global.sessionName = "conexão akame" // NÃO ALTERE AQUI...
//=====================================\\
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//=====================================\\
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
