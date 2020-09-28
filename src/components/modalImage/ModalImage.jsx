import React, { useContext, useEffect } from 'react';
import { useGetImage } from '../../service/PhotoService';
import { ContextApp } from '../app';
import ModalComments from '../modalComments';
import ModalForm from '../modalForm/ModalForm';

import './index.sass';

const ModalImage = () => {
	const { state, dispatch } = useContext(ContextApp);
	const image = useGetImage(state.id);

	useEffect(() => {
		if (image && image !== 'error') {
			dispatch({
				type: 'CHANGE_COMMENTS',
				payload: image.comments,
			});
		}
	}, [dispatch, image]);

	if (!image) {
		return <></>;
	}

	if (image === 'error') {
		return <h2>Error</h2>;
	}

	const { url } = image;

	return (
		<div className="overlay">
			<div className="modal">
				<div className="modal__main">
					<img src={url} alt="" />
					<ModalComments />
				</div>

				<ModalForm />

				<button className="modal__close" onClick={() => dispatch({ type: 'CHANGE_ID', keyload: null })} type="button">&#10006;</button>
			</div>
		</div>
	);
};

export default ModalImage;
