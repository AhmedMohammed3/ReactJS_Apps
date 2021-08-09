// our-domain.com/news

import { Fragment } from 'react';
import Link from 'next/link';

const NewsPage = () => {
	return (
		<Fragment>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href='/news/something'>something</Link>
				</li>
				<li>
					<Link href='/news/new'>new</Link>
				</li>
			</ul>
		</Fragment>
	);
};

export default NewsPage;
