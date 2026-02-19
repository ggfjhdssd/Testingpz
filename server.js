const { Telegraf } = require('telegraf');
const express = require('express');
const path = require('path');

const bot = new Telegraf('8425061161:AAF9MAh8n9q6DpgQW0LSZkPJa_Ck42l-uYk');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

bot.start((ctx) => {
    ctx.reply(မင်္ဂလာပါ ${ctx.from.first_name}!\n\nPayCoin MM ဂိမ်းကို အောက်ကခလုတ်နှိပ်ပြီး ဆော့လို့ရပါပြီဗျာ။, {
        reply_markup: {
            inline_keyboard: [[
                { 
                    text: "🎮 ဂိမ်းဆော့ရန်", 
                    web_app: { url: "URL_နေရာမှာ_အစားထိုးပါ" } 
                }
            ]]
        }
    });
});

bot.launch();
app.listen(process.env.PORT || 3000, () => console.log('Server running...'));
