import jsdom from 'jsdom';


const htmlToTexts = async (html, tags) => {
  try {
    const dom = await new jsdom.JSDOM(html);
    const document = dom.window.document;
    
    const results = {};
    
    for (const tag of tags) {
      const tagElements = document.querySelectorAll(`${tag}`);
      
      results[tag] = Array.from(tagElements).map((tagElement) => tagElement.textContent);
    }
    
    return results;
  } catch (err) {
    return err;
  }
};

const htmlToText = (html) => {
  const dom = new jsdom.JSDOM(html);
  const document = dom.window.document;
  
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent;
};

const htmlIdToText = async (html, id) => {
  try {
    const dom = await new jsdom.JSDOM(html);
    const document = dom.window.document;
    
    return document.getElementById(id).textContent;
  } catch (e) {
    return e;
  }
};

export default htmlToText;
export {
  htmlToTexts,
  htmlIdToText,
  htmlToText
};