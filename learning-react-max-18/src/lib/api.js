const BACKEND_URL = 'http://localhost:1234';

export async function getAllQuotes() {
	const response = await fetch(`${BACKEND_URL}/quotes/quotes`);
	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Could not fetch quotes.');
	}

	return resData.quotes;
}

export async function getSingleQuote(quoteId) {
	const response = await fetch(`${BACKEND_URL}/quotes/${quoteId}`);
	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Could not fetch quote.');
	}

	return resData.quote;
}

export async function addQuote(quoteData) {
	const response = await fetch(`${BACKEND_URL}/quotes/add-quote`, {
		method: 'POST',
		body: JSON.stringify(quoteData),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Could not create quote.');
	}

	return null;
}

export async function addComment(requestData) {
	const response = await fetch(
		`${BACKEND_URL}/comments/${requestData.quoteId}`,
		{
			method: 'POST',
			body: JSON.stringify(requestData.commentData),
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Could not add comment.');
	}

	return { commentId: data.name };
}

export async function getAllComments(quoteId) {
	const response = await fetch(`${BACKEND_URL}/comments/${quoteId}`);

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || 'Could not get comments.');
	}

	return resData.comments;
}
