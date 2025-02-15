import React from "react";
import GlobalWrapper from "../../components/common/GlobalWrapper";
import DisplayCard from "../../components/apistore/DisplayCard";

const page = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center w-[90%] mx-auto flex-wrap gap-5">
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
      </div>
    </div>
  );
};

export default page;
