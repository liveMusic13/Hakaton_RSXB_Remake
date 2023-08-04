import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.scss';
import { saveStepContext, veiwHelpContext } from './components/Context';
import Router from './components/Router';

const Main = () => {
	const [saveStep, setSaveStep] = useState('start');
	const [veiwHelp, setVeiwHelp] = useState(false);

	return (
		<>
			<saveStepContext.Provider value={{ saveStep, setSaveStep }}>
				<veiwHelpContext.Provider value={{ veiwHelp, setVeiwHelp }}>
					<Router />
				</veiwHelpContext.Provider>
			</saveStepContext.Provider>
		</>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);
