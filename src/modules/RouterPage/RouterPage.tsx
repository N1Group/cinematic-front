import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from '../../page/Auth';
import { Home } from '../../page/Home';
import { Room } from '../../page/Room';
import Layout from '../Layout';

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='Auth' element={<Auth />}></Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/room/:id' element={<Room />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
