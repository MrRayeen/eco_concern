import React from "react";
import { Link } from "react-router-dom";

const Button = ({text, path}) => {
  return (
    <Link
      to={path}
      className=" uppercase px-8 py-4 bg-[#17414F] rounded-full text-white min-w-[200px] max-w-[200px] flex items-center justify-center font-semibold text-xl hover:scale-110 hover:duration-200 hover:ease"
    >
      {text}
    </Link>
  );
};

export default Button;
