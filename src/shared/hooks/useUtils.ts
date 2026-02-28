import { useState, useCallback, useEffect } from 'react';

/**
 * Custom hook for managing toggle/boolean state with callbacks
 * @param initialValue Initial boolean value
 * @returns [value, toggle, setValue]
 */
export const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return { value, toggle, setValue };
};

/**
 * Custom hook for managing async state (loading, data, error)
 * @returns { isLoading, data, error, setData, setError, setLoading }
 */
export const useAsync = <T,>(initialData?: T) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | undefined>(initialData);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (asyncFunction: () => Promise<T>, onSuccess?: (data: T) => void) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await asyncFunction();
        setData(response);
        onSuccess?.(response);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, data, error, execute, setData, setError, setLoading: setIsLoading };
};

/**
 * Custom hook for managing form input state
 */
export const useFormInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  const bind = {
    value,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(event.target.value),
  };

  return { value, setValue, reset, bind };
};

/**
 * Custom hook for previous value
 */
export const usePrevious = <T,>(value: T): T | undefined => {
  const [prev, setPrev] = useState<T | undefined>();

  useEffect(() => {
    setPrev(value);
  }, [value]);

  return prev;
};
