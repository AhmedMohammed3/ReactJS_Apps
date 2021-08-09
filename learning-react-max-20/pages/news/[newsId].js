import { useRouter } from 'next/router';

// our-domain.com/anything

const DetailPage = () => {
	const router = useRouter();

	const newsId = router.query.newsId;

	return <h1>Detail Page {newsId}</h1>;
};

export default DetailPage;
