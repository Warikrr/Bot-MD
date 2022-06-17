module.exports = {
  name: "tagall",
  alias: ["tagall","infoall"],
	category: "group",
	desc: "Announcement for group",
	isGroup: true,
	isAdmin: true,
	isSpam: true,
	async run({msg, conn},{q}){
	  let data = await conn.groupMetadata(msg.from)
	  let txt1 = `*Announcement Group*\n\n`
	  let txt = ` ❏ From @${msg.sender.split("@")[0]}\n`
	      txt += ` ❏ Pesan : ${q ? q : "Tidak ada pesan"}\n`
	      txt += ` ❏ Group : ${data.subject}\n`
	      txt += ` ❏ Total Member : ${data.participants.length}\n\n`
	      for(let i of data.participants){
	        txt += `  ༆ ➪  @${i.id.split("@")[0]}\n`
	      }
	      txt2 = "\n\n*_Best Regards " + config.namebot + "_*"
	      teks = txt1 + "```" + txt + "```" + txt2
	      conn.sendMessage(msg.from,{text : teks, withTag : true},{quoted:msg, adReply: true})
	}
}