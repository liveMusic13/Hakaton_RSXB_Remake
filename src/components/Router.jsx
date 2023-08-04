import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home';
import Intro from './screens/intro/Intro';
import NarrativeWindow from './screens/narrative-window/NarrativeWindow';

const Router = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<Home />} path='/' />
					<Route element={<Intro />} path='/intro' />
					<Route element={<NarrativeWindow />} path='/narrativeWindow' />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
