import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import animationData from "../Assests/animations/107043-success.json";
import Loader from "../components/Layout/Loader";

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  
  return (
    <div>
      <Loader width={300} height={300} />
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful 😍
      </h5>
      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage;
