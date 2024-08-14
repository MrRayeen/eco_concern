import React from "react";

const Review = ({ pp, name, review }) => {
  return (
    <div className="max-w-[460px] max-h-[400px] bg-white rounded-2xl px-11 py-12 flex flex-col space-y-7">
      <div className="flex space-x-8 items-center">
        <picture>
          <img src={pp} alt="profile" width={62} height={62} />
        </picture>
        <div className="">
          <span>{name}</span>
          <picture>
            <img src="five-star.svg" alt="five-star" width={107} height={21} />
          </picture>
        </div>
      </div>
      <p>
        {review}
      </p>
    </div>
  );
};

export default Review;
