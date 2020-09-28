import React, { useState } from 'react';
import ListImages from '../listImages';
import ModalImage from '../modalImage';

import './index.sass';

const ContextApp = React.createContext();

const App = () => {
	const [state, updateState] = useState(null);

	let modal;

	if (state) {
		modal = <ModalImage />;
	}

	return (

		<ContextApp.Provider value={{ state, updateState }}>
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
