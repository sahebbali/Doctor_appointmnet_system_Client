import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../services/API";
import Layout from "../components/Layout";
import DoctorList from "../components/DoctorList";
import { Row } from "antd";
const HomePage = () => {

  const [doctors, setDoctors] = useState([]);

    // login user data
    const getUserData = async () => {
      try {
        const res = await API.get(
          "/user/getAllDoctors",
  
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
          if (res.data.success) {
          setDoctors(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getUserData();
    }, []);
 
  return (
    <div>
        <Layout>
           <h1>Home Page</h1>
           <Row>
           {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
         </Row>
        </Layout>
      </div>
  );
};

export default HomePage;