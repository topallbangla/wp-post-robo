const wap = require('./wp-auto-poster');
const bnToEnNumber = (bnNumber) => {
  const bnNumbers = {
    '০': '0',
    '১': '1',
    '২': '2',
    '৩': '3',
    '৪': '4',
    '৫': '5',
    '৬': '6',
    '৭': '7',
    '৮': '8',
    '৯': '9'
  };

  return bnNumber.replace(/[০-৯]/g, (char) => bnNumbers[char]);
};

const blogger = {};

blogger.get = async (req, res) => {
  const response = {};
  
  try {
    if (req.body.url) {
      const url = req.body.url;
      const resp = await fetch(url);
      const result = await resp.json();
      
      if (result.version) {
        response.title = result.feed.entry[0].title.$t;
        response.categories = result.feed.entry[0].category;
        response.content = result.feed.entry[0].content.$t;
      } else {
        result.success = false;
        result.message = 'please give a blogger feed url';
      }
    } else {
      response.success = false;
      response.message = 'please give an url';
    }
  } catch (e) {
    console.error(e);
    response.success = false;
    response.message = e;
  }
  
  res.json(response);
}

blogger.post = async (req, res) => {
  const response = {};
  
  return response;
}


module.exports = blogger;