import 'dotenv/config';

import createTaxonomy from '../lib/createTaxonomy.js';

const arr = [
  {
    name: 'তাসকিন',
    slug: 'taskin'
  },
  {
    name: 'মিহাদ',
    slug: 'mihad'
  },
  {
    name: 'তানজিল',
    slug: 'tanjil'
  }
];

console.log(await createTaxonomy('lekhok', arr));

// console.log(await createTaxonomy('lekhok', { name: 'আজিম', slug: 'azim' }));

console.log('end test...');