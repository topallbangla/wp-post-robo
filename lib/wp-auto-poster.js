/*
* Name: WP auto poster
*/

const lib = {};

lib.newPost = async (link, token, rawData) => {
  let response;
  try {
    const url = new URL(link);
    const api = `https://${url.hostname}/wp-json/wp/v2/posts`;
    if (link && token && rawData) {
      const data = JSON.stringify(rawData);
      const resp = await fetch(api, {
        method: 'POST',
        headers: {
          "Authorization": "Bearer " + token,
          "Content-type": "application/json"
        },
        body: data
      })
      const respData = await resp.json();
      response = respData;
    } else {
      response = 'link, token and data must be filled';
    }
  } catch (e) {
    response = e;
  }
  
  return response;
}

module.exports = lib;