import React, { useState, useContext } from 'react';
import { useGetImage } from '../../service/PhotoService';
import { ContextApp } from '../app';

import './index.sass';

const ModalImage = () => {
	const [name, onChangeName] = useState('');
	const [value, onChangeValue] = useState('');
	const { state, updateState } = useContext(ContextApp);
	const image = useGetImage(state);

	if (!image) {
		return <></>;
	}

	if (image === 'error') {
		return <h2>Error</h2>;
	}

	const { url, comments } = image;

	const onSumbmitFrom = (e) => {
		e.preventDefault();
		comments.push({
			id: name,
			text: value,
			date: Date.parse(new Date()),
		});
		onChangeName('');
		onChangeValue('');
	};

	return (
		<div className="overlay">
			<div className="modal">
				<div className="modal__main">
					<img src={url} alt="" />
					<div className="modal__comments">
						{comments.map(({ id, text, date }) => {
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
						})}
					</div>
				</div>

				<form className="modal__form" onSubmit={onSumbmitFrom}>
					<input className="modal__form_input" type="text" required placeholder="Ваше имя" value={name} onChange={(e) => onChangeName(e.target.value)} />
					<input className="modal__form_input" type="text" required placeholder="Ваш комментарий" value={value} onChange={(e) => onChangeValue(e.target.value)} />
					<button className="modal__form_btn" type="submit">Оставить комментарий</button>
				</form>

				<button className="modal__close" onClick={() => updateState(null)} type="button">&#10006;</button>
			</div>
		</div>
	);
};

export default ModalImage;
