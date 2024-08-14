import React from "react";

const ServiceItem = ({imgPath, title,descrip}) => {
  return (
    <div className="flex flex-col space-y-5 text-white items-center max-w-[320px] text-center px-4">
      <div className="bg-white flex items-center justify-center rounded-full w-32 h-32">
        <picture>
          <img src={imgPath} alt="lab" />
        </picture>
      </div>
      <h4 className="text-2xl font-medium">{title}</h4>
      <span>{descrip}</span>
    </div>
  );
};

export default ServiceItem;
