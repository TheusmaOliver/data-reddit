import { useCallback, useEffect, useState } from "react";

export default function useRedditApi(url) {
  const [data, setData] = useState();
  const [after, setAfter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pagination = after ? url + `&after=${after}` : "";

  const loadData = useCallback((url) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setAfter(response.data.after);
        setData(response.data.children);
      })
      .catch((error) => {
        console.log(error);
        setError("Error on loading posts.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLoadMorePost = () => {
    setLoading(true);
    fetch(pagination)
      .then((response) => response.json())
      .then((response) => {
        setAfter(response.data.after);
        setData([...data, ...response.data.children]);
      })
      .catch((error) => {
        console.log(error);
        setError("Error on loading posts.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setError(null);
    loadData(url);
  }, [url, loadData]);

  return {
    loading,
    error,
    data,
    after,
    loadData,
    handleLoadMorePost,
  };
}
