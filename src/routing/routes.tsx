import { Auth } from '@/page/Auth';
import { Recovery } from '@/page/Auth/modules/Recovery';
import { RecoveryCode } from '@/page/Auth/modules/RecoveryCode';
import { SignIn } from '@/page/Auth/modules/SignIn';
import { Home } from '@/page/Home';
import { Room } from '@/page/Room';
import { User } from '@/types/User';
import { RouteObject } from 'react-router';
import { Layout } from '../modules/Layout';
import { authLoader } from './utils/authLoader';
import { unauthRegister } from './utils/unauthLoader';

export const getRoutes = (user?: User): RouteObject[] => [
  {
    path: '/',
    element: <Layout />,
    loader: unauthRegister(),
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <Room />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
    loader: authLoader(),
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: 'recovery',
        element: <Recovery />,
      },
      {
        path: 'recovery/code',
        element: <RecoveryCode />,
      },
    ],
  },
];
