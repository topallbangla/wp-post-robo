
const osNotify = async (id, key, title, content, url, img) => {
  const api = 'https://api.onesignal.com/notifications';
  try {
    const body = JSON.stringify({
      app_id: id,
      included_segments: ['All'],
      headings: title,
      contents: content,
      url,
      chrome_web_image: img
    });
    
    const res = await fetch(api, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Authorization': 'Basic ' + key,
        'content-type': 'application/json'
      },
      body
    });
    const result = await res.json();
    
    return result;
  } catch (err) {
    return err;
  }
};


module.exports = osNotify;