const { MixinApi } = require('@mixin.dev/mixin-node-sdk');
const keystore = require('./keystore');

// console.log(keystore);


const config = {
  keystore,
  blazeOptions: {
    parse: true,
    syncAck: true,
  },
};


// const config=require('./config');

// const keystore = {
//     app_id: config.app_id,
//     session_id: config.session_id,
//     server_public_key: config.server_public_key,
//     session_private_key:config.session_private_key,
//     config,
//   };





// const handler = {
//     // callback when bot receive message
//     onMessage: async msg => {
//       const user = await client.user.fetch(msg.user_id);
//       console.log(msg);
//       console.log(`${user.full_name} send you a ${msg.category} message: ${msg.data}`);

//       // make your bot automatically reply
//       const res = await client.message.sendText(msg.user_id, 'received');
//       console.log(`message ${res.message_id} is sent`);
//     },
//     // callback when bot receive message status update
//     // msg.source === 'ACKNOWLEDGE_MESSAGE_RECEIPT'
//     onAckReceipt: async msg => {
//       console.log(`message ${msg.message_id} is ${msg.status}`);
//     },
//     // callback when bot receive transfer
//     // msg.category === 'SYSTEM_ACCOUNT_SNAPSHOT'
//     // RECOMMEND use /snapshots api to listen transfer



//     onTransfer: async msg => {
//       const { data: transfer } = msg;
//       const user = await client.user.fetch(transfer.counter_user_id);
//       const asset = await client.asset.fetch(transfer.asset_id);
//       console.log(`user ${user.full_name} transfer ${transfer.amount} ${asset.symbol} to you`);
//     },
//     // callback when group information update, which your bot is in
//     // msg.category === 'SYSTEM_CONVERSATION'
//     onConversation: async msg => {
//       const group = await client.conversation.fetch(msg.conversation_id);
//       console.log(`group ${group.name} information updated`);
//     },
//   };
//   // ws will auto reconnect after connect closing
//   client.blaze.loop(handler);







const client = MixinApi(config);
// const client = MixinApi({ keystore });

// Use Promise
// client.user.profile().then(console.log);
// Use async await
async function getMe() {
  const me = await client.user.profile();
  // console.log(me);
  //
  // console.log(`name:${me.app.name},\napp_id:${me.app.app_id},\napp_number:${me.app.app_number},\ndescription:${me.app.description},\ncreator_id:${me.app.creator_id},\n`)
  // console.log(me);
}
// getMe()



async function zuoye2(data) {
  const result0 = await client.user.fetch(data);
  console.log(result0);
}
//  zuoye2('41102708')
//  const user_id = result0.user_id;
//   const result = await client.user.fetchList([user_id])

// }
// zuoye2('41102708')

async function zuoye3(data) {

  for (const element of data) {

    const result0 = await client.user.fetch(element);
    //  console.log(result0);
    const user_id = result0.user_id;
    console.log(`user_id:${user_id}`);
    const result = await client.user.fetchList([user_id]);
    console.log(result);
  }

}
// zuoye3(['41102708']);
// zuoye3(['41102708','7000104824','7000104341','7000102069','7000105018'])


async function zuoye9() {
  const kk = await client.user.fetchList(['a840dd01-8bb4-4590-930a-21452ea2d6e6'])
  console.log(kk)
}
// zuoye9()

// client.blaze.loop({
//   onMessage(msg) {
//     // console.log(msg);
//     // console.log(msg.user_id);
//     // console.log(client.user.fetchList([msg.user_id]));
//     async function zuoye9(){
//       const kk=await client.user.fetchList([`${msg.user_id}`])
//       console.log(`${kk[0].full_name} 给你发送了："${msg.data}"`);}
//       zuoye9()
//   },
// });

// //作业6
// client.blaze.loop({
//   async onMessage(msg) {//接收消息
//     console.log(msg);
//     await client.message.sendText(msg.user_id,"加油")//发送消息
//    },

//   async onAckReceipt(msg){},

// });


// //作业7
// client.blaze.loop({
//   async onMessage(msg) {//接收消息
//     console.log(msg);
//     const md= '### 4.8.图片 [​](https://xbmp.org/docs/bianchengke/public/markdown#48%E5%9B%BE%E7%89%87)\r\n' +
//     '\r\n' +
//     '语法：`!` + `[` + `图片名` + `]` + `(` + `链接` + `)`\r\n' +
//     '\r\n' +
//     '例子：\r\n' +
//     '\r\n' +
//     '```\r\n' +
//     '![Github图片](https://raw.githubusercontent.com/vwumumu/images/master/octocats.webp)\r\n' +
//     '```\r\n' +
//     '\r\n' +
//     '![Github图片](https://raw.githubusercontent.com/vwumumu/images/master/octocats.webp)\r\n' +
//     '\r\n' +
//     '图片名可以为空，图片链接将在支持Markdown语法的工具中**显示为该链接所代表的图片**。'

//     const md1 =  
//     '这是一个示例 Markdown 文本，可以包含标题、段落、列表、代码块等内容。\r\n' +
//     '\r\n' +
//     '## 标题\r\n' +
//     '\r\n' +
//     'Markdown 使用 # 符号来表示标题，例如：\r\n' +
//     '- # 表示一级标题\r\n' +
//     '- ## 表示二级标题\r\n' +
//     '- ### 表示三级标题\r\n' +
//     '\r\n' +
//     '## 段落\r\n' +
//     '\r\n' +
//     'Markdown 中的段落由连续的文本行组成，如下所示：\r\n' +
//     '这是第一行文本。\r\n' +
//     '这是第二行文本。\r\n' +
//     '\r\n' +
//     '## 列表\r\n' +
//     '\r\n' +
//     'Markdown 支持有序列表和无序列表，例如：\r\n' +
//     '- 无序列表项 1\r\n' +
//     '- 无序列表项 2\r\n' +
//     '- 无序列表项 3\r\n' +
//     '\r\n' +
//     '1. 有序列表项 1\r\n' +
//     '2. 有序列表项 2\r\n' +
//     '3. 有序列表项 3\r\n' +
//     '\r\n' +
//     '## 代码块\r\n' +
//     '\r\n' +
//     'Markdown 使用 \\` 符号来表示单行代码，使用三个 \\` 符号来表示多行代码块，例如：\r\n' +
//     '\r\n' +
//     '\\`var message = "Hello, world!";\\`\r\n' +
//     '\r\n' +
//     '\\`\\`\\`javascript\r\n' +
//     'function greet(name) {\r\n' +
//     '    console.log("Hello, " + name + "!");\r\n' +
//     '}\r\n' +
//     'greet("Alice");\r\n' +
//     '\\`\\`\\`\r\n' +
//     '\r\n' +
//     '## 链接与图片\r\n' +
//     '\r\n' +
//     'Markdown 支持插入链接与图片，例如：\r\n' +
//     '[Google](https://www.google.com)\r\n' +
//     '\r\n' +
//     '![Markdown](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)\r\n' +
//     '\r\n' +
//     '这只是 Markdown 的一小部分功能，你可以根据需要使用更多的 Markdown 标记来创建丰富的文档。'

//     const md3 =  "### What you'll need\r\n" +
//     '\r\n' +
//     '- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:\r\n' +
//     '  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.\r\n' +
//     '\r\n' +
//     '## Generate a new site\r\n' +
//     '\r\n' +
//     'Generate a new Docusaurus site using the **classic template**.\r\n' +
//     '\r\n' +
//     'The classic template will automatically be added to your project after you run the command:'

//     const md2 =   "### What you'll need\r\n" +
//     '\r\n' +
//     '- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:\r\n' +
//     '  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.\r\n' +
//     '\r\n' +
//     '## Generate a new site\r\n' +
//     '\r\n' +
//     'Generate a new Docusaurus site using the **classic template**.\r\n' +
//     '\r\n' +
//     'The classic template will automatically be added to your project after you run the command:'


//     // await client.message.sendText(msg.user_id,"加油")//发送文本消息
//     // await client.message.sendPost(msg.user_id,"# 加油")//发送文章消息，markdown格式
//     await client.message.sendPost(msg.user_id,md3)//发送文章消息，markdown格式
//     await client.message.sendPost(msg.user_id,md2)//发送文章消息，markdown格式
//    },
//   async onAckReceipt(msg){},
// });

//作业7
// client.blaze.loop({
//   async onMessage(msg) {//接收消息
//     console.log(msg);
//     await client.message.sendAppButton(msg.user_id,[
//       {
//         label: '好好学习',//展示的标签
//         action: 'https://xbmp.org',//直接跳转后面的网址
//         // action: 'input:https://xbmp.org',//弹出后面的网址，需要再点击网址，才会跳转到该网址
//         color:'#ffa500' //16位进制颜色表示
//       },
//       {
//         label: '学习',//展示的标签
//         // action: 'https://xbmp.org',//直接跳转后面的网址
//         action: 'input:https://xbmp.org',//弹出后面的网址，需要再点击网址，才会跳转到该网址
//         color:'#ffa500' //16位进制颜色表示
//       }
//     ])//数组形式，可以一次发多个按钮
//    },
//   async onAckReceipt(msg){},
// });


// client.blaze.loop({
//   async onMessage(msg) {//接收消息
//     console.log(msg);
//     await client.message.sendAppCard(msg.user_id,{
//       app_id: '408cace6-84a2-44ae-8fff-37b2333e26ad',
//       icon_url: 'https://mixin-images.zeromesh.net/y0rAmPBGgNV5NskMtJ8deTmM0omHjQ6TshUi7TXRe6TpSfYin-sw3jQjc3CZxt1aVZQyQ9rbvU6b09I_UNJhV9k=s256',
//       title: '2024.03.12.卖不卖你随便，但说话声音小一点…',
//       description: '定投人生课堂',
//       action: 'https://xuexi-courses.firesbox.com/#/7000102069/courses/8297',
//       shareable: true,//这个卡片是否可以分享给别人
//       // updated_at: '2021-10-22T04:44:09.53216191Z'
//     }) //内容来源于node后台获得的data数据，其中的updated_at这个内容不需要，注释掉即可
//    },
//   async onAckReceipt(msg){},
// });

// //作业7，文章收集器，给机器人发送/list，就可以收到到作者名字的按钮，点作者名字，就可以送到作者对应的文章的卡片
// //1、判断发送的内容是不是/list
// client.blaze.loop({
//   async onMessage(msg) {//接收消息
//     console.log(msg);
//     //1、判断发送的内容是不是/list
//     if (msg.type == 'message' && msg.data =='/list'){//下面就应该发作者名字的按钮
//       // console.log('duile'),
//       await client.message.sendAppButton(msg.user_id,[
//               {
//                 label: '笑来老师',//展示的标签
//                 action: 'input:xiaolai',
//                 color:'#ffa500' //16位进制颜色表示
//               },
//               {
//                 label: '战友分享',//展示的标签
//                 action: 'input:zhanyou',
//                 // action: 'https://xuexi-courses.firesbox.com/#/7000102069/courses/8298',//直接跳转后面的网址
//                 // action: 'input:https://xbmp.org',//弹出后面的网址，需要再点击网址，才会跳转到该网址
//                 color:'#ffa500' //16位进制颜色表示
//               }
//             ])//数组形式，可以一次发多个按钮
//     }
//     else if (msg.type == 'message' && msg.data =='xiaolai'){
//        await client.message.sendAppCard(msg.user_id,{
//       app_id: '408cace6-84a2-44ae-8fff-37b2333e26ad',
//       icon_url: 'https://mixin-images.zeromesh.net/y0rAmPBGgNV5NskMtJ8deTmM0omHjQ6TshUi7TXRe6TpSfYin-sw3jQjc3CZxt1aVZQyQ9rbvU6b09I_UNJhV9k=s256',
//       title: '2024.03.12.卖不卖你随便，但说话声音小一点…',
//       description: '定投人生课堂',
//       action: 'https://xuexi-courses.firesbox.com/#/7000102069/courses/8297',
//       shareable: true,//这个卡片是否可以分享给别人
//       // updated_at: '2021-10-22T04:44:09.53216191Z'
//     }) //内容来源于node后台获得的data数据，其中的updated_at这个内容不需要，注释掉即可
//     }

//     else if (msg.type == 'message' && msg.data =='zhanyou'){
//       await client.message.sendAppCard(msg.user_id,{
//         app_id: '408cace6-84a2-44ae-8fff-37b2333e26ad',
//         icon_url: 'https://mixin-images.zeromesh.net/WID48KY6TRay62kVTzp1dzWh2K1x6y-CYjx1a3uZzm2shh0eeqx24e8K9MO6gOQbEiLq465NKJ-DpRAhZ_kcDqSmRvQ8lcj8f4Fz=s256',
//         title: '定投故事第113期 《持续读书成长  让我穿越至',
//         description: '定投故事第113期 《持续读书成长  让我穿越至暗时刻逆风翻盘》',
//         action: 'https://xuexi-courses.firesbox.com/#/7000102069/courses/8298',
//         shareable: true,
//       }, 
//       ) //内容来源于node后台获得的data数据，其中的updated_at这个内容不需要，注释掉即可
//    }
//    },
//   async onAckReceipt(msg){},
// });


// //作业8 
// client.blaze.loop({
//   async onMessage(msg) {//接收消息
//     console.log(msg);
//     await client.message.sendText(msg.user_id,"加油")//发送消息
//    },

//   async onAckReceipt(msg){},

// });

// //作业8 文件
// client.blaze.loop({
//   async onMessage(msg) {//接收消息
//     console.log(msg);
//     await client.message.sendFile(msg.user_id,{
//       attachment_id: 'be1ba429-c76a-4386-813e-e96584759685',
//       mime_type:  'application/epub+zip',
//       size: 1075943,
//       name: 'Magic Tree House 1 Dinosaurs Before Dark (Mary Pope Osborne) (z-lib.org).epub',
//   }
//   )
//    },
//   async onAckReceipt(msg){},

// });

// //作业8 图片
// client.blaze.loop({
//   async onMessage(msg) {//接收消息
//     console.log(msg);
//     await client.message.sendImage(msg.user_id,
//       { attachment_id: 'c57bb865-0d08-4576-9897-9988fffa56ec',
//       mime_type: 'image/jpeg',
//       size: 65553,
//       width: 928,
//       height: 597,
//       thumbnail: 'L4Rp8-?bfi?b?bj[j@j[~qocf6oJ',

//     }
//       )
//    },
//   async onAckReceipt(msg){},
// });

// //作业8 声音
// client.blaze.loop({
//   async onMessage(msg) {//接收消息
//     console.log(msg);
//     await client.message.sendAudio(msg.user_id, {
//       attachment_id: 'f0c5e4d2-da39-4030-8d06-fea87cf48e2a',
//       mime_type: 'audio/ogg',
//       size: 8798,
//       duration: 3840,
//       waveform: 'AAABAgMCAgMBAwIEBAMEBAYHCBwzV11CREQiXWykcIuSxbByXTCLS1pKWWOAnYBPQywyKzeL2tVGQikcMBwfBAcKBwIDDgAGAwYGAAMFAAUGBAMJBQMFAgEEBAMDBQEDBQYCAw==',
//     }
//     )
//   },
//   async onAckReceipt(msg) { },
// });



//作业8 上传文件 ，上传本地文件到mixin服务器。
client.blaze.loop({
  async onMessage(msg) {//接收消息
    console.log(msg);
   const ATT= await client.attachment.upload('\\index1.js'
)//文件地址
console.log(ATT)
//输出内容如下：{
//   view_url: 'https://mixin-assets.zeromesh.net/mixin/attachments/1710844239-798a991af12423fc7c10d0c24fa8c55bdc0091abfbe395cd795598100ea6e5da',
//   attachment_id: '67197aa1-9548-4488-b5cd-1b65159f80eb'
// }

  },
  async onAckReceipt(msg) { },
});