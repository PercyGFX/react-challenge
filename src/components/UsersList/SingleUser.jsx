import React from "react";
import { useParams } from "react-router-dom";
import { useSingleUser } from "../../hooks/useUsers";
import { Link } from "react-router-dom";

function SingleUser() {
  const { id } = useParams();
  const { data: user, isLoading, isError } = useSingleUser(id);

  if (isLoading) {
    return <div className=" text-center mx-auto w-full">Loading...</div>;
  }

  console.log(user);
  return (
    <div className="mx-3">
      <div className="mb-6">
        <Link className="font-semibold text-gray-700" to="/">
          Go Back
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className=" flex flex-col md:flex-row items-center justify-center md:justify-start gap-x-4">
          <img src={user?.image} alt={user?.firstName} />

          <div className=" text-center md:text-left py-3">
            <h1 className="text-2xl font-semibold my-1">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="text-gray-500 my-1">{user?.email}</p>
            <p className="text-gray-500 my-1">{user?.phone}</p>
            <div className=" flex mt-3 gap-x-3">
              <span className=" bg-blue-200 rounded-full px-3 py-1 font-semibold">
                {user?.role}
              </span>
              <span className=" bg-green-200 rounded-full px-3 py-1 font-semibold">
                {user?.company?.title}
              </span>
            </div>
          </div>
        </div>

        {/* profile info */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
          {/* profile */}
          <div className="bg-gray-100 p-6 rounded-lg">test</div>
          {/* address */}
          <div className="bg-gray-100 p-6 rounded-lg">test</div>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
