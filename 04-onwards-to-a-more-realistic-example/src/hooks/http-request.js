import React, {useState} from 'react'

const useHttp = (requestConfing) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
  
    const sendRequest = async (taskText) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          requestConfing.url
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
  
        const loadedTasks = [];
  
        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
  
        setTasks(loadedTasks);
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    };
  
    useEffect(() => {
      fetchTasks();
    }, []);
  
    const taskAddHandler = (task) => {
      setTasks((prevTasks) => prevTasks.concat(task));
    };
}

export default useHttp
