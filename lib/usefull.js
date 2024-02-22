
const useFull = {};

useFull.objToQueryString = (obj) => {
  const arr = [];
  let query = '?';
  for (let e in obj) {
    const add = `${e}=${obj[e]}`;
    arr.push(add);
  }
  query += arr.join('&');
  
  return query;
}

module.exports = useFull;