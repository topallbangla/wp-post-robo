import selectShortDescription from '../lib/selectShortDescription.js';

const res = await fetch('https://golpershohor.com/wp-json/wp/v2/posts?_fields=content&categories=283');
const datas = await res.json();

for (let data of datas) {
  const dd = await selectShortDescription(data.content.rendered);
  console.log(dd);
}

console.log('test completed');