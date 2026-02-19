const { Telegraf } = require('telegraf');
const express = require('express');
const path = require('path');

// သင့်ရဲ့ Bot Token
const bot = new Telegraf('8425061161:AAF9MAh8n9q6DpgQW0LSZkPJa_Ck42l-uYk');
const app = express();

// Render ကပေးတဲ့ Port ကို ယူသုံးမယ်၊ မရှိရင် 3000 သုံးမယ်
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

bot.start((ctx) => {
    // Render ကပေးတဲ့ URL ကို ဒီမှာ အစားထိုးရန် (ဥပမာ- https://paycoin-mm.onrender.com)
    const gameUrl = "https://testingpz.onrender.com"; 

    ctx.reply(`မင်္ဂလာပါ ${ctx.from.first_name}!\n\nPayCoin MM ဂိမ်းကို အောက်ကခလုတ်နှိပ်ပြီး ဆော့လို့ရပါပြီဗျာ။`, {
        reply_markup: {
            inline_keyboard: [[
                { 
                    text: "🎮 ဂိမ်းဆော့ရန်", 
                    web_app: { url: gameUrl } 
                }
            ]]
        }
    });
});

bot.launch();

// Render အတွက် 0.0.0.0 မှာ နားထောင်ပေးဖို့ လိုပါတယ်
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
