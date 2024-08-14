import React from "react";
import Button from "./Buttons/button";

const Newsletter = () => {
  return (
    <div className="bg-ascent px-14 py-9 flex justify-between items-center max-h-[512px] rounded-xl">
      <div className="flex flex-col justify-center">
        <div className="mb-[80px] flex flex-col space-y-3">
          <h3>e-newsletter</h3>
          <h2 className="w-3/4 leading-[50px]">
            innovative water & sanitation solutions by EcoConcern
          </h2>
          <span className="text-[#727272]">
            Sign-up to get news on our latest additions, current environmental
            news as well as helpful guides.
          </span>
        </div>
        <div className="flex space-x-5 ">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="px-4 min-w-[360px] text-lg py-4 rounded-full w-full max-w-[360px] max-h-[56px]"
            id=""
          />
          <Button text={"subscribe"} path={"contact"} />
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="w-[450px] h-[450px] bg-[#A0DCF1] rounded-full"></div>
        <picture className="absolute top-0">
          <img
            src="couple-drinking.png"
            alt="couple-drinking"
            width={395}
            height={360}
          />
        </picture>
      </div>
    </div>
  );
};

export default Newsletter;
