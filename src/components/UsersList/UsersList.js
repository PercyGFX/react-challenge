import React from "react";
import { useUsers } from "../../hooks/useUsers";

const UsersList = () => {
  const { data: users, isLoading, isError } = useUsers();

  console.log(users);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    // User List goes here...
    <div>hjg</div>
  );
};

export default UsersList;
