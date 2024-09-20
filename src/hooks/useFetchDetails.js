import axios from "axios";
import { useEffect, useState } from "react";

const useFetchDetails = (endpoint) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null); // Reset error before fetching
      const response = await axios.get(endpoint);
      setData(response.data);
    } catch (error) {
      console.error("error", error);
      setError(error);
    } finally {
      setLoading(false); // Ensure loading is stopped
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchData();
    return () => {
      abortController.abort(); // Prevent memory leak by canceling the request
    };
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchDetails;
