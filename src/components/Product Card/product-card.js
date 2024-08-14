import React from "react";

const ProductCard = ({ imgPath, name }) => {
  return (
    <div className="relative swiper-slide hover:scale-110 duration-200 ease-in-out group">
      <picture>
        <img src={imgPath} alt={name} width={330} height={335} />
      </picture>
      <span>{name}</span>
      <a href="#products" className="absolute text-center text-xl font-medium rounded-xl bottom-0 left-0 right-0 bg-secondary text-white py-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <button className="">
          Purchase
        </button>
      </a>
    </div>
  );
};

export default ProductCard;
