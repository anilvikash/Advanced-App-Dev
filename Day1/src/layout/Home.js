import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "../layout/Home.css";

function Home() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : "Guest";

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };

  return (
    <div>
      <NavBar />
      <div className="user">Welcome {username} !</div>

     
      <Footer />
      <Sidebar />
    </div>
  );
}

export default Home;
