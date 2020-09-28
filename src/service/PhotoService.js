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
	const [image, updateImages] = useState(null);

	useEffect(() => {
		getResource(`/${id}`)
			.then((data) => updateImages(data))
			.catch(() => updateImages('error'));
	}, [id]);

	return image;
};
