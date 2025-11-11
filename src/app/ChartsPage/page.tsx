import React from "react";
import AreaCharts from "../../../components/Charts/AreaCharts";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[600px] h-[400px]">
        <AreaCharts />
      </div>
    </div>
  );
};

export default page;
