import { useSocket } from '@/hooks/useSocket';
import { delay } from '@/utils/delay';

export const useAuthError = () => {
  const { socket } = useSocket({
    name: 'error',
    onMessage: async () => {
      console.log('error');
      socket.disconnect();
      await delay(1000);
      socket.connect();
    },
  });
};
