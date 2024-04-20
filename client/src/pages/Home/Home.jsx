import React from "react";
import Sidebar from "../../componets/Sidebar";
import MessageContainer from "../../componets/MessageContainer";

const Home = () => {
  return (
    <div className="flex  bg-slate-400 md:h-[550px]  sm:h-[450px] rounded-lg  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
