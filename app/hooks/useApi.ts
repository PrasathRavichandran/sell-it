import { useState } from "react";

const useApi = (apiFunc: any) => {
  const [data, setdata] = useState<any[]>();
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);

  const request = async (...args: any) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    if (!response.ok) return setError(true);

    setError(false);
    setdata(response.data);
  };

  return { request, data, error, loading };
};

export default useApi;
