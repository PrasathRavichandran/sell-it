import { create } from "apisauce";
import cache from "../utils/Cache";

const apiClient = create({
  baseURL: "http://192.168.18.30:9000/api",
});

const get = apiClient.get as any;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data as string);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
