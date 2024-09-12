import axios from "axios";
import { useQueries } from "react-query";

const IMAGE_API = "https://picsum.photos/300";

const fetchImage = async () => {
  const res = await axios.get(IMAGE_API);
  return res;
};

export const useFetchImages = (user: string) => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const results = useQueries(
    ids.map((id) => ({
      queryKey: ["post", id, user],
      queryFn: () => fetchImage(),
      refetchInterval: 10 * 1000,
    }))
  );

  return results.map((q, index) => ({
    id: ids[index],
    isLoading: q.isLoading,
    imgURL: q?.data?.request?.responseURL,
  }));
};
