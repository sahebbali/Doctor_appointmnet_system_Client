import React, { useEffect } from "react";
import axios from "axios";
import API from "../services/API";
const HomePage = () => {
  // login user data
  const getUserData = async () => {
    try {
      const res = await API.post(
        "/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;