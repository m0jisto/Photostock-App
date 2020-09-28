import urlBase from './constants';

const getResource = async (url = '') => {
	const res = await fetch(`${urlBase}${url}`);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, received ${res.status}`);
	}

	return res.json();
};

export default getResource;
