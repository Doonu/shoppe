import { useEffect, useState } from 'react';

export const useNetwork = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleStatusChange = () => setIsOnline(navigator.onLine);

  useEffect(() => {
    window.addEventListener('offline', handleStatusChange);
    window.addEventListener('online', handleStatusChange);

    return () => {
      window.removeEventListener('offline', handleStatusChange);
      window.removeEventListener('online', handleStatusChange);
    };
  }, [isOnline]);

  return isOnline;
};
