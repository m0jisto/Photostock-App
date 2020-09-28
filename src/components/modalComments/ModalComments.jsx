import React, { useContext } from 'react';
import { ContextApp } from '../app';

import './index.sass';

const ModalComments = () => {
	const { state } = useContext(ContextApp);

	return (
		<div className="modal__comments">
			{state.comments ? state.comments.map(({ id, text, date }) => {
				let day = new Date(date).getDate();
				let month = new Date(date).getMonth() + 1;
				const year = new Date(date).getFullYear().toString();

				if (+day < 10) {
					day = `0${day}`;
				}

				if (+month < 10) {
					month = `0${month}`;
				}

				return (
					<div className="modal__comment" key={id}>
						<div className="modal__comment_date">{`${day}.${month}.${year}`}</div>
						<div className="modal__comment_text">{text}</div>
					</div>
				);
			}) : <></>}
		</div>
	);
};

export default ModalComments;
