import {htmlToTexts} from './html-to-text.js';

const selectShortDescription = async (html) => {
  const ps = await htmlToTexts(html, ['p']);
  const nowPs = [];
  
  ps.p.forEach((e) => {
    if (e.length >= 150 && e.length <= 300) {
      nowPs.push(e);
    }
  });
  
  const ind = Math.floor(Math.random() * nowPs.length);
  
  console.log(nowPs[ind]);
  
  return nowPs[ind];
};


export default selectShortDescription;