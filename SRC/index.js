const { MixinApi } = require('@mixin.dev/mixin-node-sdk');

const keystore = {
  app_id: "cbaa6b46-11b3-4bb0-aa77-4a91162683e4",
  session_id: "aa6cd5da-9d1c-4839-b1e8-175625c4f6cf",
  server_public_key: "9e53982b3c8873be506e1e7431f117cfa91a0db87646a1d79010e1bf61d4338d",
  session_private_key: "938215f49a2733b12b6f78f1b592dd3b2d81ea40daff757c368984a13e3a25af",
};
const client = MixinApi({ keystore });

// Use Promise
client.user.profile().then(console.log);
// Use async await
async function getMe() {
  const me = await client.user.profile();
  console.log(me);
}


const handler = {
    // callback when bot receive message
    onMessage: async msg => {
      const user = await client.user.fetch(msg.user_id);
      console.log(`${user.full_name} send you a ${msg.category} message: ${msg.data}`);
  
      // make your bot automatically reply
      const res = await client.message.sendText(msg.user_id, 'received');
      console.log(`message ${res.message_id} is sent`);
    },
    // callback when bot receive message status update
    // msg.source === 'ACKNOWLEDGE_MESSAGE_RECEIPT'
    onAckReceipt: async msg => {
      console.log(`message ${msg.message_id} is ${msg.status}`);
    },
    // callback when bot receive transfer
    // msg.category === 'SYSTEM_ACCOUNT_SNAPSHOT'
    // RECOMMEND use /snapshots api to listen transfer
    onTransfer: async msg => {
      const { data: transfer } = msg;
      const user = await client.user.fetch(transfer.counter_user_id);
      const asset = await client.asset.fetch(transfer.asset_id);
      console.log(`user ${user.full_name} transfer ${transfer.amount} ${asset.symbol} to you`);
    },
    // callback when group information update, which your bot is in
    // msg.category === 'SYSTEM_CONVERSATION'
    onConversation: async msg => {
      const group = await client.conversation.fetch(msg.conversation_id);
      console.log(`group ${group.name} information updated`);
    },
  };
  // ws will auto reconnect after connect closing
  client.blaze.loop(handler);