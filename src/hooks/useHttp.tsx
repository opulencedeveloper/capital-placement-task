import { useCallback, useState } from "react";


const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(async (requestConfig: any, applyData: (data: any) => void) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:4010/api/530.3660965525686/programs/voluptatibus/application-form"
      , {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(requestConfig.body)
      }
    );
      if (response.ok) {
        let responseData: any = await response.json();
        applyData(responseData);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }  catch (err) {
      
      if (err instanceof Error) {
        console.log(err);
        if (err.message === "Failed to fetch") {
          setError("Network error! Please check your internet connection.");
        } else {
          setError(err.message || "Something went wrong!");
        }
      } else {
        setError("Error occurred, try again.");
      }
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;