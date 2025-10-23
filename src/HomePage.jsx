import React from "react";
import { useHistory } from "react-router-dom";
import HomeContent from "./components/HomeContent.jsx";
import Menu from "./components/Menu.jsx";
import ThreeDivLayout from "./components/ThreeDivLayout.jsx";
import Menu2 from "./components/Menu2.jsx";
import PizzaList from "./components/PizzaList.jsx";
import Footer from "./components/Footer.jsx"; 

const HomePage = () => {
  const history = useHistory();

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col">
     
      <div className="w-full bg-white ">
        <HomeContent onButtonClick={() => history.push("/order")} />
      </div>

     
      <div className="mt-4 w-full bg-white py-4 ">
        <Menu />
      </div>

     
      <div className="mt-4 w-full bg-[#FAF7F2]  ">
        <ThreeDivLayout />
      </div>

      <div className="w-full bg-[#FAF7F2] py-4 ">
        <Menu2 />
      </div>

      <div className="w-full bg-[#FAF7F2] py-10">
        <PizzaList />
      </div>

     
      <Footer />
    </div>
  );
};

export default HomePage;
