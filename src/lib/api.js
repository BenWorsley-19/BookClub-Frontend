const SERVER_URL = 'http://localhost:8080';

export async function getAllQuotes() {
  const response = await fetch(`${SERVER_URL}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`${SERVER_URL}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
}

export async function addQuote(quoteData) {
  const response = await fetch(`${SERVER_URL}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${SERVER_URL}/comments/${requestData.quoteId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function addToReadItem(requestData) {

  // should this be an update? Are the URLs right?
  const response = await fetch(`${SERVER_URL}/ToReadLists/${requestData.toReadListId}`, {
    method: 'POST',
    body: JSON.stringify(requestData.addToReadIte),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not add recommendation.');
  }

  // TODO
  return null;
  // return { commentId: data.name };
}

export async function addRecommendation(requestData) {
  const response = await fetch(`${SERVER_URL}/recommendations/${requestData.toReadListId}`, {
    method: 'POST',
    body: JSON.stringify(requestData.recommendationData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // const data = await response.json();

  if (!response.ok) {
    throw new Error('Could not add recommendation.');
  }

  // TODO
  return null;
  // return { commentId: data.name };
}

export async function getAllRecommendations(toReadListId) {
  const response = await fetch(`${SERVER_URL}/recommendations/${toReadListId}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not get recommendations.');
  }

  const transformedRecommendations = [];
  for (const key in data) {
    const rec = {
      id: key,
      ...data[key],
    };

    transformedRecommendations.push(rec);
  }

  return transformedRecommendations;
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${SERVER_URL}/comments/${quoteId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
