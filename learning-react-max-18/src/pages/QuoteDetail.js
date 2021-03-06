import { Fragment, useEffect } from 'react';
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import { getSingleQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/UI/LoadingSpinner';


const QuoteDetail = () => {
	const { sendRequest, status, error, data: quote } = useHttp(getSingleQuote);

	const match = useRouteMatch();
	const { quoteId } = useParams();

	// const [quote, setQuote] = useState({});

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className='centered'>{error}</p>;
	}

	if (!quote) {
		return <p>No Quote Found</p>;
	}
	return (
		<Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={match.path} exact>
				<div className='centered'>
					<Link className='btn--flat' to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
