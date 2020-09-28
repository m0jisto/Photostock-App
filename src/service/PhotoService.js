import { useState, useEffect } from 'react';
import getResource from './utils';

export const useGetImages = () => {
	const [img, updateImg] = useState(null);

	useEffect(() => {
		getResource()
			.then((data) => updateImg(data))
			.catch(() => updateImg('error'));
	}, []);

	return img;
};

export const useGetImage = (id) => {
	const [img, updateImg] = useState(null);

	useEffect(() => {
		getResource(`/${id}`)
			.then((data) => updateImg(data))
			.catch(() => updateImg('error'));
	}, [id]);

	return img;
};
