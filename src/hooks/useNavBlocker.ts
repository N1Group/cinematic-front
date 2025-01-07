import { useEffect } from 'react';
import { useBlocker } from 'react-router';

export const useNavBlocker = (onBlock: () => void, enabled?: boolean) => {
  const blocker = useBlocker(enabled ?? true);

  useEffect(() => {
    if (blocker.state === 'blocked') {
      // TODO: add proper blocker
      blocker.proceed();
      // return onBlock();
    }
  }, [blocker]);

  return { proceed: blocker.proceed! };
};
