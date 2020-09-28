import React, { useContext } from 'react';
import { useGetImages } from '../../service/PhotoService';
import { ContextApp } from '../app';

import './index.sass';

/* eslint-disable */

const ListImages = () => {
	const { updateState } = useContext(ContextApp);
	const images = useGetImages();

	if (!images) {
		return <></>;
	}

	if (images === 'error') {
		return <h1>error</h1>;
	}

	return (
		<div className="wrapper">
			{images.map(({ id, url }) => <img key={id} src={url} onClick={() => updateState(id)} alt="" />)}
		</div>
	);
};

export default ListImages;
