import 'dotenv/config';
import notify from '../lib/notify.js';


console.log(await notify('Hello'));
console.log('test end!');