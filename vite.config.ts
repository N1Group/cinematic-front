import { reactRouter } from '@react-router/dev/vite';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [reactRouter()],
    define: {
      HOST: JSON.stringify(env.HOST),
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
