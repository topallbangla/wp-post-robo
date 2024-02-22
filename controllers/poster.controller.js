import fs from 'fs';
import notify from '../lib/notify.js';
import sanitizeHTML from '../lib/sanitizeHTML.js';
import createTaxonomy from '../lib/createTaxonomy.js';
import {htmlToText} from '../lib/html-to-text.js';
import selectShortDescription from '../lib/selectShortDescription.js';

let part = 1;
let count = 0;
let resCount = 0;

const options = {};

/**
 * আমাকে এই কোড সম্পুর্ণ করতে হবে।
 * রিকোয়েস্ট থেকে পোস্ট এর অপশন নেওয়া হবে এবং সেই অনুযায়ী পোস্ট পাবলিশ করা হবে।
 * 
 */

const token = Buffer.from(`${process.env.USER}:${process.env.WP_HUB_TOKEN}`).toString('base64');


const poster = async (req, res) => {
  resCount = 0;
  if (req.body.url) {
    const url = req.body.url;
    const opt = req.body.opt;
    
    try {
      const checkWP = await fetch(url);
      if(checkWP.headers.has('x-wp-total')) {
        const maxPost = checkWP.headers.get('x-wp-total');
        const maxPage = checkWP.headers.get('x-wp-totalpages');
        if (maxPost) {
          await initializer(opt);
          await caller(maxPost, maxPage, url, res);
        }
      } else {
        response(res, 400, false, `A WP API URL is required, but it's not a WP API URL.`);
      }
    } catch (e) {
      console.error(e);
      response(res, 500, false, `Server error!`);
    }
  } else {
    response(res, 400, false, `URL is important but it's missing!`);
  }
};

async function caller(ponum, panum, url, resp) {
  const api = new URL(url);
  
  for (let pa = 1; pa <= panum; pa++) {
    api.searchParams.set('page', pa);
    api.searchParams.set('order', 'asc');
    api.searchParams.set('_fields', 'title,content');
    try {
      const res = await fetch(api);
      const datas = await res.json();
      
      for (let data of datas) {
        const p = await publisher(data);
        if (p.id) {
          console.log(p.id);
          count += 1;
          part += 1;
          if (count === 1) {
            response(resp, 201, true, `posting started: ${p.id}`);
          }
        } else {
          await notify(JSON.stringify(p) || p);
          return false;
        }
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  await notify(`${count} post publishing complete...`);
  return 'complete!';
}

async function initializer(opt) {
  const opts = {
    lekhok: opt.lekhok ? await createTaxonomy('lekhok', opt.lekhok) : '',
    series: opt.series ? await createTaxonomy('series', opt.series) : '',
    categories: opt.categories ? await createTaxonomy('categories', opt.categories) : '',
    titlePrefix: opt.titlePrefix,
    slugPrefix: opt.slugPrefix
  };
  Object.assign(options, opts);
  
  return true;
}

async function publisher(data) {
  const title = setTitle(data.title.rendered);
  console.log(part);
  console.log(bnToen(getBnNum(title)[0]));
  console.log(bnToen(getBnNum(title)[0]) !== part);
  if (bnToen(getBnNum(title)[0]) !== part) return false;
  const slug = setSlug(data.title.rendered);
  const body = JSON.stringify({
      title,
      slug,
      lekhok: options.lekhok,
      series: options.series,
      categories: options.categories,
      excerpt: await selectShortDescription(data.content.rendered),
      content: sanitizeHTML(data.content.rendered),
      // status: 'publish'
    });
  try {
    const res = await fetch(process.env.BASE + '/wp/v2/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Basic ' + token
      },
      body
    });
    const response = await res.json();
    
    return response;
  } catch (e) {
    console.error(e);
    return false;
  }
  return false;
  /*
  const file = fs.createWriteStream(`${process.cwd()}/tests/${data.id}.json`);
  await file.write(JSON.stringify({
      title: htmlToText(data.title.rendered),
      excerpt: await selectShortDescription(data.content.rendered),
      content: sanitizeHTML(data.content.rendered)
    }));
  */
  
  function setTitle(ti) {
    return options.titlePrefix + getBnNum(ti)[0];
  }
  function setSlug(sl) {
    return options.slugPrefix + part;
  }
}

function getBnNum(text) {
  return Array.from(text.matchAll(/[০-৯]+/g), match => match[0]);
}

function enTobn(enNum) {
  const enNumbers = {
    '0': '০',
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯'
  };
  
  const num = enNum.toString();
  
  return num.replace(/[0-9]/g, (char) => enNumbers[char]);
}
function bnToen(bnNum) {
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

  return parseInt(bnNum.replace(/[০-৯]/g, (char) => bnNumbers[char]));
}

function response(res, co, suc, msg) {
  if (resCount === 0) {
    res.status(co || 200).json({
      success: suc,
      message: msg
    });
    resCount += 1;
    return true;
  }
  notify(resCount);
  notify(suc);
  notify(msg);
  resCount += 1;
  return false;
}

export default poster;