import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from '../components/Header';
import { Home } from '../page/Home';
import { Room } from '../page/Room';

const RouterPage = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/room/:id' element={<Room />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterPage;
