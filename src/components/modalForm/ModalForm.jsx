import React, { useState, useContext } from 'react';
import { ContextApp } from '../app';

const ModalForm = () => {
	const [name, onChangeName] = useState('');
	const [value, onChangeValue] = useState('');
	const { state, dispatch } = useContext(ContextApp);

	const onSumbmitFrom = (e) => {
		e.preventDefault();

		const newComments = [...state.comments, {
			id: name,
			text: value,
			date: Date.parse(new Date()),
		}];

		dispatch({
			type: 'CHANGE_COMMENTS',
			payload: newComments,
		});
		onChangeName('');
		onChangeValue('');
	};

	return (
		<form className="modal__form" onSubmit={onSumbmitFrom}>
			<input className="modal__form_input" type="text" required placeholder="Ваше имя" value={name} onChange={(e) => onChangeName(e.target.value)} />
			<input className="modal__form_input" type="text" required placeholder="Ваш комментарий" value={value} onChange={(e) => onChangeValue(e.target.value)} />
			<button className="modal__form_btn" type="submit">Оставить комментарий</button>
		</form>
	);
};

export default ModalForm;
