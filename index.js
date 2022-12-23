const line = require('@line/bot-sdk');
const express = require('express');
const axios = require('axios').default;
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const app = express();



//vercel env
const lineConfig = {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN ?? env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET ?? env.LINE_CHANNEL_SECRET
};

const client = new line.Client(lineConfig);

//public folder
app.use(express.static(__dirname + '/Frontend'));
app.use(express.json());

app.get('/', (req, res) => {
    //idex.html
    res.sendFile(__dirname + '/Frontend/index.html');
});

// app.post('/webhook', line.middleware(lineConfig), async (req, res) => {
//     try {
//         const events = req.body.events;
//         console.log(events);
//         return events.length > 0 ? await events.map((item) => {
//             handleEvent(item);
//         }) : res.status(200).send('OK');
//     } catch (error) {
//         console.log(error);
//         return res.status(500).end();
//     }
// });

//push message
app.post('/push', async (req, res) => {
    try {

        const { name, phone, lineId, interest } = req.body;
        const message = {
            type: 'text',
            text: "ชื่อ: " + name + "\n" +
                "เบอร์โทร: " + phone + "\n" +
                "ไลน์ไอดี: " + lineId + "\n" +
                "ความสนใจ: " + interest
        };


        const result = await client.pushMessage('U3bc2ec800c39788fbe563e99fb5a79f8', message);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }
});


const handleEvent = async (event) => {
    console.log(event);
    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: 'Hello World'
    });
};

//vercel port
const port = 4000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});