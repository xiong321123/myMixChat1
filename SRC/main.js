const { MixinApi } = require('@mixin.dev/mixin-node-sdk');
const keystore=require('./keystore');
// const keystore = {
//     app_id: "cbaa6b46-11b3-4bb0-aa77-4a91162683e4",
//     session_id: "aa6cd5da-9d1c-4839-b1e8-175625c4f6cf",
//     server_public_key: "9e53982b3c8873be506e1e7431f117cfa91a0db87646a1d79010e1bf61d4338d",
//     session_private_key: "938215f49a2733b12b6f78f1b592dd3b2d81ea40daff757c368984a13e3a25af",
//   };
console.log(keystore);




 
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








const client = MixinApi({ keystore });

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
getMe()



async function zuoye2(data){

 const result0 = await client.user.fetch(data);
//  console.log(result0);
 const user_id = result0.user_id;
//  console.log(user_id);
  const result = await client.user.fetchList([user_id]);
  console.log(result);
}
// zuoye2('41102708')

async function zuoye3(data){
 
  for (const element of data) {
 
 const result0 = await client.user.fetch(element);
//  console.log(result0);
 const user_id = result0.user_id;
 console.log(`user_id:${user_id}`);
  const result = await client.user.fetchList([user_id]);
  console.log(result);
}

}

// zuoye3(['41102708','7000104824','7000104341','7000102069','7000105018'])


// async function zuoye9(){
// const kk=await client.user.fetchList(['df72710b-f932-4ff4-8440-641c6a1c8b8f'])
// console.log(kk)}
// zuoye9()