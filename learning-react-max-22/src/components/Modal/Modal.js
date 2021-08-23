import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const animationTiming = {
	enter: 1000,
	exit: 1000
};
/*const cssClasses = [
					'Modal',
					state === 'entering'
						? 'ModalOpen'
						: state === 'exiting'
						? 'ModalClosed'
						: null,
				]; */
const modal = props => {
	return (
		<CSSTransition
			in={props.show}
			timeout={animationTiming}
			mountOnEnter
			unmountOnExit
			classNames={{
				enter: '',
				enterActive: 'ModalOpen',
				exit: '',
				exitActive: 'ModalClosed'
			}}>
			<div className='Modal'>
				<h1>A Modal</h1>
				<button className='Button' onClick={props.closed}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	);
};

export default modal;
