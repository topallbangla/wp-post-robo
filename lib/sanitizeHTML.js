import jsdom from 'jsdom';


function sanitizeHTML(html) {
  const dom = new jsdom.JSDOM(html);
  const document = dom.window.document;
  
  const div = document.createElement('div');
  div.innerHTML = html;
  
  div.querySelectorAll('script, noscript, style, link, meta').forEach(function(element) {
    element.parentNode.removeChild(element);
  });
  
  div.querySelectorAll('*').forEach(function(element) {
    element.removeAttribute('style');
    element.removeAttribute('sizes');
    element.removeAttribute('width');
    element.removeAttribute('height');
  });
  
  return div.innerHTML;
}


export default sanitizeHTML;