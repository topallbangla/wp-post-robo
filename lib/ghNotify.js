const osNotify = require('./osNotify');

const ghNotify = async (title, content, url, img) => {
  const id = '4e1621a7-8891-4122-a42a-2dcdf577dac3';
  const key = 'MTk0YzI3MTUtZmY4ZS00NWI2LTg2MWItNDAzZDFiMWZkZGQy';
  
  const t = {
    en: title
  };
  const c = {
    en: content
  };
  
  const res = await osNotify(id, key, t, c, url, img);
  
  return res;
};


module.exports = ghNotify;