import {useCallback, useState} from 'react'

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
  
    const sendRequest = useCallback( async (requestConfing, applayData) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          requestConfing.url, {
            method: requestConfing.method ? requestConfing.method : 'GET',
            headers: requestConfing.headers ? requestConfing.method : {},
            body: requestConfing.body ? JSON.stringify(requestConfing.body) : null,
          });
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        applayData(data);
 
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }, []);

  return {
    isLoading,
    error,
    sendRequest
  };
}

export default useHttp
