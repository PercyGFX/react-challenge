import React, { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useUsers } from "../../hooks/useUsers";
import UserCard from "./UserCard";
import { useAtom } from "jotai";
import { showUsersAtom } from "../../utils/atoms";

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: users, isLoading, isError } = useUsers(10, currentPage);
  const [showUsers, setShowUsers] = useAtom(showUsersAtom);

  const totalPages = Math.ceil((users?.total || 0) / 10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //console.log(users);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    // User List goes here...
    <div>
      {showUsers ? (
        <>
          <div>
            <h1 className="text-2xl font-semibold mb-4">Users List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-3">
              {users?.users?.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </div>
          <div className="my-8">
            {users && users?.users && (
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={handlePageChange}
                maxWidth={400}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <p className=" text text-slate-800 font-semibold">
            Please click Load Users from the Navigation Bar.
          </p>
        </>
      )}
    </div>
  );
};

export default UsersList;
