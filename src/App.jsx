import React from "react";
import Header from "./components/Header/Header";

import UserList from "./components/UserList/UserList";

const App = () => {
  return (
    <>
      <Header title={"List of Users"} btnTxt={"+ Add User"} />
      <UserList />
    </>
  );
};

export default App;
