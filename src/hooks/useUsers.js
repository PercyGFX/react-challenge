import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// hook to fetch users data
export function useUsers(limit = 10, page = 1) {
  return useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios
        .get(
          `https://dummyjson.com/users?limit=${limit}&skip=${
            (page - 1) * limit
          }`
        )
        .then((res) => res.data),
  });
}
