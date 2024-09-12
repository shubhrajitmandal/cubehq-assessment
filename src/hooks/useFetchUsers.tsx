import { useInfiniteQuery } from "react-query";
import { api } from "../apiConfig";
import { IUser } from "../models";

interface IResponse {
  limit: number;
  skip: number;
  total: number;
  users: IUser[];
}

const PAGE_LIMIT = 30;

const fetchUsers = async ({ pageParam = 0 }): Promise<IResponse> => {
  const response = await api.get(
    `/users?limit=${PAGE_LIMIT}&skip=${pageParam}`
  );

  return response.data;
};

export const useFetchUsers = () =>
  useInfiniteQuery<IResponse>("users", fetchUsers, {
    getNextPageParam: (lastPage, pages) => {
      const skip = pages.length * PAGE_LIMIT;
      return skip > lastPage.total ? undefined : pages.length * PAGE_LIMIT;
    },
  });
