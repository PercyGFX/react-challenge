import React from "react";
import { useUsers } from "../../hooks/useUsers";

const UsersList = () => {
  const { data: users, isLoading, isError } = useUsers();

  //console.log(users);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    // User List goes here...
    <div>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Users List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-3">
          {users?.users?.map((user) => (
            <div
              key={user.id}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex gap-x-3 items-center"
            >
              <div>
                <img
                  className=" rounded-full h-22 w-22 object-cover"
                  src={user.image}
                  alt={user.firstName}
                />{" "}
              </div>
              <div className=" gap-y-3">
                <h2 className="text-xl font-semibold">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-500">{user.email}</p>
                <p className="text-gray-500">{user.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
