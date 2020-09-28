import React, { useReducer } from 'react';
import ListImages from '../listImages';
import ModalImage from '../modalImage';

import './index.sass';

const ContextApp = React.createContext();

const initialState = {
	id: null,
	comments: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_ID':
			return {
				...state,
				id: action.payload,
			};
		case 'CHANGE_COMMENTS':
			return {
				...state,
				comments: action.payload,
			};
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	let modal;

	if (state.id) {
		modal = <ModalImage />;
	}

	return (
		<ContextApp.Provider value={{ state, dispatch }}>
			<div className="app">
				<div className="container">
					<h1 className="title">Test App</h1>
					<ListImages />

					<footer className="footer">
						<hr />
						<h2 className="footer__title">© 2018-2019</h2>
					</footer>
				</div>

				{modal}
			</div>
		</ContextApp.Provider>
	);
};

export { App, ContextApp };
