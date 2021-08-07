import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommmentsList from './CommentsList';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
	const [isAddingComment, setIsAddingComment] = useState(false);
	const { quoteId } = useParams();
	const { sendRequest, status, data: comments } = useHttp(getAllComments);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	const addedCommentHandler = useCallback(() => {
		sendRequest(quoteId);
		setIsAddingComment(false);
	}, [sendRequest, quoteId]);

	let commentsJsx;

	if (status === 'pending') {
		commentsJsx = (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	if (status === 'completed' && comments && comments.length > 0) {
		commentsJsx = <CommmentsList comments={comments} />;
	}

	if (status === 'completed' && (!comments || comments.length === 0)) {
		commentsJsx = <p className='centered'>No comments were added yet!</p>;
	}

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className='btn' onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && (
				<NewCommentForm
					quoteId={quoteId}
					onAddedComment={addedCommentHandler}
				/>
			)}
			{commentsJsx}
		</section>
	);
};

export default Comments;
