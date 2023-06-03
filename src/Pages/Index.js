import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Index = ({ user }) => {
  // if (!user) {
  //   return <Navigate to='/login' />;
  // }

  return (
    <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "3vh 2vh" }}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Index;
