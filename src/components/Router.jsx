import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home';
import Intro from './screens/intro/Intro';

const Router = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<Home />} path='/' />
					<Route element={<Intro />} path='/intro' />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
