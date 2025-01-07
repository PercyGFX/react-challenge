import React from "react";
import { useAtom } from "jotai";
import { showUsersAtom } from "../utils/atoms";

const NavBar = () => {
  const [showUsers, setShowUsers] = useAtom(showUsersAtom);

  // show users on atom
  const handleClick = () => {
    setShowUsers(true);
  };
  return (
    <nav className="flex justify-between items-center bg-red-900 text-[#df944f] px-8 py-2 font-semibold">
      <h1>User Details</h1>
      <button
        className="h-12 w-32 text-medium bg-[#df944f] text-[#472200] rounded-lg 
                 hover:bg-[#cf7f33] hover:cursor-pointer font-semibold "
        onClick={handleClick}
      >
        Load Users
      </button>
    </nav>
  );
};

export default NavBar;
