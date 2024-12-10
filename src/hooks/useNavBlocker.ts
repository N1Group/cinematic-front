import { useEffect } from 'react';
import { useBlocker, useLocation, useNavigate } from 'react-router';

export const useNavBlocker = (onBlock: () => void) => {
  const blocker = useBlocker(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (blocker.state === 'blocked') {
      return onBlock();
    }
  }, [blocker]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault();
      console.log('Attempted to navigate back');
      navigate(location.pathname, { replace: true });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate, location.pathname]);

  return { proceed: blocker.proceed! };
};
