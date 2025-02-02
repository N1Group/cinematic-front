import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { getRoutes } from './routing/routes';
import { useUserStore } from './stores/user';

export const App = () => {
  const user = useUserStore((state) => state.user);
  const memoRoutes = useMemo(() => getRoutes(user), [user]);
  const router = createBrowserRouter(memoRoutes);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
