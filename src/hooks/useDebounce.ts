import { useEffect, useState } from 'react';

type UseDebounceOutput<T> = {
  debouncedValue: T;
  isDebouncing: boolean;
};

function useDebounce<T>(value: T, delay: number): UseDebounceOutput<T> {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return {
    debouncedValue: debouncedValue,
    isDebouncing: value !== debouncedValue,
  };
}

export default useDebounce;
