import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <Link to={`/${user.id}`}>
      <div
        key={user?.id}
        className="bg-gray-100 p-4 rounded-lg shadow-sm flex gap-x-3 items-center"
      >
        <div>
          <img
            className=" rounded-full h-22 w-22 object-cover"
            src={user?.image}
            alt={user?.firstName}
          />{" "}
        </div>
        <div className=" gap-y-3">
          <h2 className="text-xl font-semibold">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
          <p className="text-gray-500">{user?.phone}</p>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
