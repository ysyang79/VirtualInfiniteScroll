import { infiniteQueryOptions } from "@tanstack/react-query";
import { getUsers } from "./api";

export default function createUsersInfiniteQueryOptions() {
  return infiniteQueryOptions({
    queryKey: ["users"],
    queryFn: ({ pageParam = 1 }) => getUsers({ page: pageParam, limit: 50 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.pagination.hasMore
        ? lastPage.pagination.currentPage + 1
        : undefined;
    },
  });
}
