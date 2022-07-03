const moment = require('moment');
const TeleBot = require('telebot');
const bot = new TeleBot('5495995993:AAEYaZVIQ24nZ26RqgaMqTWyfWDH4LAiP0c');


bot.on(['/start'], (msg) => msg.reply.text('Hallo, Mau Ngapain?'));

  
  bot.on('/hari', (msg) => {
    return bot.sendMessage(msg.from.id, `Hari saat ini adalah, ${moment().format('dddd') }!`);
  });
  bot.on('/tanggal', (msg) => {
    return bot.sendMessage(msg.from.id, `Tanggal saat ini adalah, ${moment().format('MMM Do YY') }!`);
  });
  bot.on('/jam', (msg) => {
    return bot.sendMessage(msg.from.id, `Waktu saat ini adalah, ${moment().format('h:mm:ss a') }!`);
  });

  bot.on('/tahun', (msg) => {
    return bot.sendMessage(msg.from.id, `Waktu saat ini adalah, ${moment().format('YYYY') }!`);
  });

  bot.on('/salam', (msg) => {
    var salam='';
    var h = moment().format('H')
    if (h >= 4 && h < 10) (salam = "Selamat pagi,");
    if (h >= 10 && h < 15)(salam="Selamat siang,");
    if (h >= 15 && h < 18)(salam="Selamat sore,");
    if (h >= 18 || h < 20 )(salam="Selamat malam,");
    return bot.sendMessage(msg.from.id, salam);
  });
  



bot.start();