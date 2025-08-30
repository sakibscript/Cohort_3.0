import { useState, useEffect, use } from "react";

function useFetch(url, interval) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getDetails() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDetails();
    if (interval !== undefined) {
      const fetchInterval = setInterval(getDetails, interval * 1000);
      return () => clearInterval(fetchInterval);
    }
  }, [url, interval]);

  return { data, loading, error };
}

export default function UseFetchApp() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    5
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return <div>{data.title}</div>;
}
