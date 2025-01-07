import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { showUsersAtom } from "../utils/atoms";

// hook to fetch users data
export function useUsers(limit = 10, page = 1) {
  const [showUsers, setShowUsers] = useAtom(showUsersAtom);

  return useQuery({
    queryKey: ["users", page],
    queryFn: () =>
      axios
        .get(
          `https://dummyjson.com/users?limit=${limit}&skip=${
            (page - 1) * limit
          }`
        )
        .then((res) => res.data),
    enabled: showUsers,
  });
}

/// fetch single user

export function useSingleUser(userId) {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () =>
      axios
        .get(`https://dummyjson.com/users/${userId}`)
        .then((res) => res.data),
    enabled: !!userId,
  });
}
