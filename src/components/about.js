import React from "react";
import Button from "./Buttons/button";

const About = () => {
  return (
    <section className=" rounded-tl-[300px] bg-primary w-full border-2">
      <div className="container flex justify-between items-center space-x-[320px] py-[100px]">
        <div className="w-1/2 relative">
          <picture className="absolute z-10 right-0 bottom-[-110px]">
            <img
              src="man-drinking.png"
              alt="man-drinking"
              width={385}
              height={345}
            />
          </picture>
          <picture className="absolute">
            <img
              src="ocean-hand.png"
              alt="ocean-hand"
              width={350}
              height={377}
            />
          </picture>
        </div>
        <div className="flex flex-col space-y-11 w-1/2 ">
          <h3>about eco concern</h3>
          <h2 className="">
            welcome to <br /> eco concern pvt. ltd.
          </h2>
          <div className="flex flex-col space-y-5 [&_p]:text-xl [&_p]:text-[#727272]">
            <p>
              Eco Concern Pvt. Ltd. (EcoConcern) is a social business enterprise
              specialized in designing and utilizing innovative solutions for
              safe water, sustainable sanitation, alternative energy and healthy
              environment.
            </p>
            <p>
              EcoConcern provides complete environmental solution such as water
              treatment products, test kits, and services for treating waste
              water and fecal sludge and promote the delivery of safe,
              ecofriendly and affordable water and sanitation innovations that
              will benefit consumers and communities in Nepal.
            </p>
          </div>
          <span className="text-[#454545] text-xl font-medium">
            We believe Sustainable WASH (Water, Sanitation and Hygiene)
          </span>
          <Button text={"about us"} path={"/about"} />
        </div>
      </div>
    </section>
  );
};

export default About;
