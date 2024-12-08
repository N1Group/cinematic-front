import type { Config } from '@react-router/dev/config';

export default {
  appDirectory: 'src',
  future: { unstable_optimizeDeps: true },
  buildDirectory: 'dist',
  ssr: false,
} satisfies Config;
