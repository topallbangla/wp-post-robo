const token = Buffer.from(`${process.env.USER}:${process.env.WP_HUB_TOKEN}`).toString('base64');

async function createTaxonomy(taxonomyType, term) {
  if (Array.isArray(term)) {
      // If term is an array, create terms for each string in the array
    const termIds = [];
    for (const termObj of term) {
      console.log(termObj);
      const termId = await createTerm(taxonomyType, termObj.name, termObj.slug);
      termIds.push(termId);
    }
    return termIds;
  } else if (typeof term === 'object') {
    const termId = await createTerm(taxonomyType, term.name, term.slug);
    return termId;
  } else {
      // Invalid parameter type
    throw new Error('Name parameter must be a object or an array of objects');
  }
}

async function createTerm(taxonomyType, name, slug) {
  try {
    const res = await fetch(`${process.env.BASE}/wp/v2/${taxonomyType}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': 'Basic ' + token
    },
    body: JSON.stringify({name, slug})
  });
    const data = await res.json();
    if (data.code === 'term_exists') {
      return data.data.term_id;
    } else {
      return data.id;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
}


export default createTaxonomy;