import fs from 'fs';
import notify from '../lib/notify.js';
import sanitizeHTML from '../lib/sanitizeHTML.js';
import {htmlToText} from '../lib/html-to-text.js';
import selectShortDescription from '../lib/selectShortDescription.js';

let count = 0;
let resCount = 0;

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
          await caller(maxPost, maxPage, url, opt, res);
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

async function caller(ponum, panum, url, opt, resp) {
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
  
}

async function publisher(data) {
  const body = JSON.stringify({
      title: htmlToText(data.title.rendered),
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