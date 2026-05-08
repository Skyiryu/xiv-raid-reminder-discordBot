const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages],
  partials: ['CHANNEL']
});

async function notifyOwner() {
  try {
    const owner = await client.users.fetch(process.env.OWNER_ID);
    await owner.send("🟢 Bot is now online and running!");
    console.log("Sent bot online update");
  } catch (err) {
    console.error("Failed to notify owner: ", err);
  }
}

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);

  await notifyOwner();

  try {
    const user = await client.users.fetch(process.env.MEM_ID_1);
    
    // ⏰ Thursday & Saturday at 8:30 PM PH time
    cron.schedule('30 20 * * 4,6', async () => {
      try {
        await user.send("📩 My dearest Taughaux Dukirr, this is your weekly reminder that we have raid tomorrow at 8:00 AM PHT");
        console.log("Scheduled message sent");
      } catch (err) {
        console.error("Send failed:", err);
      }
    }, {
      timezone: "Asia/Manila"
    });

    console.log("Scheduler set for Thursday & Saturday 8:30 PM PH time");

  } catch (err) {
    console.error("Error fetching user:", err);
  }
});

// 🔥 bot login token (keep this secure)
client.login(process.env.TOKEN);
