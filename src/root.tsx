import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import '@/assets/font.css';
import '@/assets/index.css';

export const Layout = () => {
  const queryClient = new QueryClient();

  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <Meta />
        <Links />
        <title>Cinematic</title>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default function Root() {
  return <Outlet />;
}
