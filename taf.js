const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require('./işaret.json');
const { Client, MessageEmbed } = require('discord.js');

var prefix = işaret.prefix

client.on('ready', () => {
  console.log(`${client.user.tag}Adlı Botunuz Discorda giriş yaptı!`)
  const durumlar = [
    "TAF Turkish Armed Forces.",
    "BestOfUs_Ali tarafından yapıldı.",
    "Şikayetler veya öneriler için ticket aç.",
    "Rütbe atlamak için eğitimlere gir.",
    "Botumuzda tespit ettiğiniz sorunları DM yolu ile BestOfUs_Ali'ye bildiriniz.",
    "TAF'ın resmi botudur."
  ]
  setInterval(function () {
    let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
    client.user.setActivity(durum)
  }, 10000)

});

client.on("message", message => {
  if (message.content.startsWith('.rolver')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bunu yapamam.')
    let role = message.mentions.roles.first();
    let member = message.mentions.members.first();
    member.roles.add(role)
  }
})

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('.at')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapmak için yönetici yetkisine sahip olman gerekiyor.')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'logs')
           log.send(`${user.tag} adlı kişi sunucudan atılmıştır.`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi suncumuzda bulunmuyor.");
      }
    } else {
      message.reply("Atılacak kişiyi yazmadın.");
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
if (message.content.contains('.ban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bunu yapabilmek için yönetici yetkisine sahip olman gerekiyor.')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'logs')
           log.send(`${user.tag} kişisi sunucudan yasaklanmıştır.`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğiniz kişi sunucumuzda bulunmuyor..");
      }
    } else {
      message.reply("Yasaklanacak kişiyi yazmadın.");
    }
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'tafbilgi') {
    const kanal = new MessageEmbed()

    .setTitle('TAF Bilgi')
    .setDescription('**Merhabalar! İşte bilgiler!**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Kuruluş Tarihi', 'İlk kuruluş tarihi belli olmasada.Şuanki resmi kuruluş tarihi **12 Nisan 2021** dir.')
    .addField('Holderlar', 'Şuana kadar TAF ta 3 tane holder görev almıştır.Birincisi **Nicolas**,İkincisi **Vito** ve son olarak üçüncü ve şuanki güncel holder olan **RolexVonSlachion** Dur.')
    .addField('Grubumuz', 'https://www.roblox.com/groups/7344586/TAF-Turkish-Armed-Force#!/about')
    .addField('Discord Adresimiz(Kalıcı)', 'https://discord.gg/dFVshRz6c6');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'rütbebilgi') {
    const kanal = new MessageEmbed()

    .setTitle('Rütbe Bilgi')
    .setDescription('**Şuanda bulunduğun rütbeyi başına . yazarak sıradaki rütbe için gereksinimleri öğrenebilirsin..**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('.', '.');
    msg.channel.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yenilikler') {
    msg.delete(msg.author)
      if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('Bunu yapmak için yönetici yetkisine sahip olman gerekiyor.')
    const kanal = new MessageEmbed()

    .setTitle('Son yenilikler')
    .setDescription('İşte yenilikler!')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Yeni rolverme komudu', '. ')
    .addField('Ban-Kick Komutları', '. ')
    .addField('Duyuru ve oylama komutları', ' .')
    .addField('Susturma komutları', '. ')
    .addField('Rütbe bilgi komutları', '. ')
    .addField('Taf Bilgi komudu', '. ')
    msg.channel.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'of-1') {
    const kanal = new MessageEmbed()

    .setTitle('Of-1/A Of-1/B Of-1/C Genel')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '1 Hafta')
    .addField('Eğitim Sayısı', 'Minimum 15 Eğitim.')
    .addField('Günlük Aktiflik', '2 Saat+')
    .addField('Diğer', 'Aktif ve disiplinli olmak.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'of-2') {
    const kanal = new MessageEmbed()

    .setTitle('Of-2')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '1 Hafta')
    .addField('Eğitim Sayısı', 'Minimum 20 Eğitim.')
    .addField('Günlük Aktiflik', '2 Saat+')
    .addField('Diğer', 'Aktif ve disiplinli olmak.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'of-3') {
    const kanal = new MessageEmbed()

    .setTitle('Of-3')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '1 Hafta')
    .addField('Eğitim Sayısı', 'Minimum 25 Eğitim.')
    .addField('Günlük Aktiflik', '2.5 Saat+')
    .addField('Diğer', 'Aktif ve disiplinli olmak.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'of-4') {
    const kanal = new MessageEmbed()

    .setTitle('Of-4')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '1.5 Hafta')
    .addField('Eğitim Sayısı', 'Minimum 30 Eğitim.')
    .addField('Günlük Aktiflik', '3 Saat+')
    .addField('Diğer', 'Aktif ve disiplinli olmak.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'of-5') {
    const kanal = new MessageEmbed()

    .setTitle('Of-5')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Gereksinimler', 'General alımına girmek!')
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'of-6') {
    const kanal = new MessageEmbed()

    .setTitle('Of-6')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '2.5 Hafta')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3 Saat+')
    .addField('Diğer', 'Aktif ve disiplinli olmak.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'of-7') {
    const kanal = new MessageEmbed()

    .setTitle('Of-7')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '2.5 Hafta')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'of-8') {
    const kanal = new MessageEmbed()

    .setTitle('Of-8')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '2.5 Hafta')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'of-9') {
    const kanal = new MessageEmbed()

    .setTitle('Of-9')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '2.5 Hafta')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'genelkurmay') {
    const kanal = new MessageEmbed()

    .setTitle('Genel Kurmay')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '3 Hafta')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'ankaraheyeti') {
    const kanal = new MessageEmbed()

    .setTitle('Ankara Heyeti')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '3 Hafta')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yaş') {
    const kanal = new MessageEmbed()

    .setTitle('Yüksek Askeri Şura')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '3.5 Hafta')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3.5 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yk') {
    const kanal = new MessageEmbed()

    .setTitle('Yönetim Kurulu')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '1 Ay')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3.5 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'büyükkonsey') {
    const kanal = new MessageEmbed()

    .setTitle('Büyük Konsey')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '1 Ay')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3.5 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'gkb') {
    const kanal = new MessageEmbed()

    .setTitle('Genel Kurmay Başkanlığı')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '1.5 Ay')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3.5 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'kararkurulu') {
    const kanal = new MessageEmbed()

    .setTitle('Karar Kurulu')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '2 Ay')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3.5 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'disiplinkurulu') {
    const kanal = new MessageEmbed()

    .setTitle('Disiplin Kurulu')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '2 Ay')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3.5 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'üyk') {
    const kanal = new MessageEmbed()

    .setTitle('Üst Yönetim Kurulu')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '2.5 Ay')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3.5 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'adk') {
    const kanal = new MessageEmbed()

    .setTitle('Askeri Disiplin Kurulu')
    .setDescription('**İşte sıradaki rütbe için gereksinimler.**')
    .setAuthor('TAF Bot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/949615421420625961/952300004364669030/Png.png')
    .addField('Rütbede geçirdiği zaman:', '3 Ay')
    .addField('Eğitim Sayısı', 'Gerekmiyor.')
    .addField('Günlük Aktiflik', '3.5 Saat+')
    .addField('Diğer', 'Aktif,disiplinli,Personellerle ilgilenmek.');
    msg.author.send(kanal);
  }
});

client.on('message', message => {
  if (message.content.startsWith('.Oylama')) {
    const args = message.content.split(' ').slice(1)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Oylama yapmak için yönetici yetkisine sahip olmalısınız.');
    if (!botmesajı) return message.reply('Oylamanın ne olacağını yazmadınız.');
    message.delete(message.Author)
    const embed = new MessageEmbed()
    .setTitle('Oylama')
    .setDescription(botmesajı)
    .setFooter('TAF Bot');
    message.channel.send({ embed: embed }).then( embedMessage => {
      embedMessage.react("✔️")
      embedMessage.react("❌");
    })
  }
})

client.on('message', message => {
  if (message.content.startsWith('.oylama')) {
    const args = message.content.split(' ').slice(1)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Oylama yapmak için yönetici yetkisine sahip olmalısınız.');
    if (!botmesajı) return message.reply('Oylamanın ne olacağını yazmadınız.');
    message.delete(message.Author)
    const embed = new MessageEmbed()
    .setTitle('Oylama')
    .setDescription(botmesajı)
    .setFooter('TAF Bot');
    message.channel.send({ embed: embed }).then( embedMessage => {
      embedMessage.react("✔️")
      embedMessage.react("❌");
    })
  }
})

client.on('message', message => {
  if (message.content.startsWith('.duyuru')) {
    const kanal = message.mentions.channels.first();
    const args = message.content.split(' ').slice(2)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Duyuru atmak için yönetici yetkisine sahip olmalısınız.');
    if (!botmesajı) return message.reply('Duyuruyu tanımlamadınız.')
    if (!kanal) return message.reply('Kanal tanımlanmadı.');
    message.delete(message.author)
    kanal.send(botmesajı);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('Aleyküm Selam.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.channel.send('Aleyküm Selam.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
    msg.channel.send('Aleyküm Selam.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleykum') {
    msg.channel.send('Aleyküm Selam.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleykum.') {
    msg.channel.send('Aleyküm Selam.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm.') {
    msg.channel.send('Aleyküm Selam.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.delete(msg.author)
    msg.reply('Küfür etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amcık') {
    msg.delete(msg.author)
    msg.reply('Küfür etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk.') {
    msg.delete(msg.author)
    msg.reply('Küfür etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pic') {
    msg.delete(msg.author)
    msg.reply('Küfür etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pıc') {
    msg.delete(msg.author)
    msg.reply('Küfür etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
    msg.delete(msg.author)
    msg.reply('Küfür etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pic.') {
    msg.delete(msg.author)
    msg.reply('Küfür etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pç') {
    msg.delete(msg.author)
    msg.reply('Küfür etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oç') {
    msg.delete(msg.author)
    msg.reply('Küfür etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu') {
    msg.delete(msg.author)
    msg.reply('Küfür etmemelisin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu çocu') {
    msg.delete(msg.author)
    msg.reply('Küfür etmemelisin!');
  }
});

client.login('OTUyMjY2NTczNDYzMjk4MDY4.YizhWw.j8vbJCHa6ppFAt-S2zIrUJkUEKU')
