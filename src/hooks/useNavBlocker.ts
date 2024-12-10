import { useEffect } from 'react';
import { useBlocker } from 'react-router';

export const useNavBlocker = (onBlock: () => void, enabled?: boolean) => {
  const blocker = useBlocker(enabled ?? true);

  useEffect(() => {
    if (blocker.state === 'blocked') {
      return onBlock();
    }
  }, [blocker]);

  return { proceed: blocker.proceed! };
};
