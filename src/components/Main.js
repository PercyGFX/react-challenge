import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersList from "./UsersList/UsersList";
import SingleUser from "./UsersList/SingleUser";

const Main = () => {
  return (
    <main className="py-12 max-w-[1440px] mx-auto">
      <Routes>
        <Route path="/" element={<UsersList />}></Route>
        <Route path="/:id" element={<SingleUser />} />
      </Routes>
    </main>
  );
};

export default Main;
