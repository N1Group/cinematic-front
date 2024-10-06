import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../page/Home/Home';
import { Room } from '../page/Room/Room';

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
