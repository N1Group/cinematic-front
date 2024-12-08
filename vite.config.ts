import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      HOST: JSON.stringify(env.HOST),
      isProd: JSON.stringify(env.NODE_ENV === 'production'),
      isDev: JSON.stringify(env.NODE_ENV === 'development'),
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
