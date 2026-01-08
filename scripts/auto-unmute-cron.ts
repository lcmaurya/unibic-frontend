import cron from "node-cron"

async function run() {
  await fetch("http://localhost:3000/api/moderation/auto-unmute", {
    method: "POST"
  })
  console.log("auto-unmute checked")
}

// daily at 2 AM
cron.schedule("0 2 * * *", run)
