import type { RouteConfig } from '@react-router/dev/routes';

export default [
  {
    path: '/',
    file: './modules/Layout/index.tsx',
    children: [
      {
        index: true,
        file: './page/Home/index.tsx',
      },
      {
        path: '/room/:id',
        file: './page/Room/index.tsx',
      },
    ],
  },
  {
    path: 'auth',
    file: './page/Auth/index.tsx',
    children: [
      {
        index: true,
        file: './page/Auth/modules/SignIn/index.tsx',
      },
      {
        path: 'recovery',
        file: './page/Auth/modules/Recovery/index.tsx',
      },
      {
        path: 'recovery/code',
        file: './page/Auth/modules/RecoveryCode/index.tsx',
      },
    ],
  },
] satisfies RouteConfig;
