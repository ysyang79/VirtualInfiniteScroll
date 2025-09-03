import { queryOptions } from "@tanstack/react-query";
import { getUsers } from "./api";

export default function createUsersQueryOptions() {
  return queryOptions({
    queryKey: ["users"],
    queryFn: () => getUsers({ limit: 1000 }),
    select: (data) => data.users,
  });
}
