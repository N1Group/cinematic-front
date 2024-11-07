import { Recovery } from '@/page/Auth/modules/Recovery';
import { RecoveryCode } from '@/page/Auth/modules/RecoveryCode';
import { SignIn } from '@/page/Auth/modules/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from '../../page/Auth';
import { Home } from '../../page/Home';
import { Room } from '../../page/Room';
import Layout from '../Layout';

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='auth' element={<Auth />}>
          <Route index element={<SignIn />} />
          <Route path='recovery' element={<Recovery />} />
          <Route path='recovery/code' element={<RecoveryCode />} />
        </Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='room/:id' element={<Room />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
