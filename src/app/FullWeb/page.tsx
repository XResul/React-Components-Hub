import React from "react";
import Sidebar from "../../../components/SideBar";
import Card from "../../../components/FullWeb/Card";

const Page = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Ana içerik */}
      <div className="flex-1 p-6 ml-64">
        {/* Üstten biraz boşluk ekleyebiliriz */}
        <div className="mt-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Page;
