let tryCount = 1;


const notify = async (msg) => {
  console.log(msg);
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=-4058994369`;
  console.log(url);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        text: msg
      })
    });
    const data = await res.json();
    
    return data;
  } catch (e) {
    console.log(e);
    await retry(msg);
  }
};

async function retry(m) {
  tryCount += 1;
  setTimeout(async function() {
    console.log(tryCount + 'no. try initiate!');
    await notify(m);
  }, 1000);
}

export default notify;