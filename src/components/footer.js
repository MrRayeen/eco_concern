import React from "react";
import Newsletter from "./newsletter";
import { Link } from "react-router-dom";

const Footer = () => {
  const current_year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-secondary py-[100px] relative mt-2">
      <div className="container relative">
        <div className="absolute -top-[60%] mx-auto">
          <Newsletter />
        </div>
        <div className="flex flex-col space-y-12 border-b-2 pb-16 ">
          <div className="flex space-x-12 justify-center mt-36">
            <a href="tel:+97715421513">
              <div className="py-4 px-14 flex space-x-10 xl:min-w-[420px] items-center max-w-[430px] max-h-[145px] bg-[#215D72] rounded-2xl [&_picture]:hover:scale-125 duration-200 ease-in-out hover:bg-[#A0DCF1]">
                <picture>
                  <img
                    src="telephone.svg"
                    alt="telephone"
                    width={60}
                    height={60}
                  />
                </picture>
                <div className="flex flex-col justify-center [&_span]:text-white [&_span]:text-xl [&_span:last-of-type]:font-medium">
                  <span>Phone Number</span>
                  <span>+977-1-5421513</span>
                </div>
              </div>
            </a>
            <a href="mailto:info@ecoconcern.com.np">
              <div className="py-4 px-14 flex space-x-10 items-center max-w-[430px] max-h-[145px] bg-[#215D72] rounded-2xl [&_picture]:hover:scale-125 duration-200 ease-in-out hover:bg-[#A0DCF1]">
                <picture>
                  <img src="mail.svg" alt="telephone" width={60} height={60} />
                </picture>
                <div className="flex flex-col justify-center [&_span]:text-white [&_span]:text-xl [&_span:last-of-type]:font-medium">
                  <span>Email Address</span>
                  <span>info@ecoconcern.com.np</span>
                </div>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/gd7TUrf2G7cfJVePA" target="_blank">
              <div className="py-4 px-12 flex space-x-10 items-center max-w-[430px] max-h-[145px] bg-[#215D72] rounded-2xl [&_picture]:hover:scale-125 duration-200 ease-in-out hover:bg-[#A0DCF1]">
                <picture>
                  <img src="pin.svg" alt="telephone" width={60} height={60} />
                </picture>
                <div className="flex flex-col justify-center [&_span]:text-white [&_span]:text-xl [&_span:last-of-type]:font-medium">
                  <span>Office Location</span>
                  <span>Talchikhel, Lalitpur, Nepal</span>
                </div>
              </div>
            </a>
          </div>
          <div className="flex gap-10 justify-between items-center text-white">
            <div className="flex flex-col space-y-8 max-w-[440px]">
              <picture>
                <img
                  src="eco_logo.png"
                  alt="eco-logo"
                  width={180}
                  height={85}
                />
              </picture>
              <p className="">
                Eco Concern Pvt. Ltd. (EcoConcern) is a social business
                enterprise specialized in designing and utilizing innovative
                solutions for safe water and sustainable sanitation.
              </p>
              <div className="flex space-x-5">
                <div className="w-10 h-10 rounded-full bg-[#41BAE3] flex items-center justify-center group">
                  <picture>
                    <img className="group-hover:scale-125 duration-200 ease-in-out" src="fb.svg" alt="" width={20} height={20} />
                  </picture>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#41BAE3] flex items-center justify-center group">
                  <picture>
                    <img className="group-hover:scale-125 duration-200 ease-in-out" src="X.svg" alt="" width={20} height={20} />
                  </picture>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#41BAE3] flex items-center justify-center group">
                  <picture>
                    <img className="group-hover:scale-125 duration-200 ease-in-out" src="insta.svg" alt="" width={20} height={20} />
                  </picture>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#41BAE3] flex items-center justify-center group">
                  <picture>
                    <img className="group-hover:scale-125 duration-200 ease-in-out" src="pinterest.svg" alt="" width={20} height={20} />
                  </picture>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-10 min-w-[235px]">
              <h4>Useful Links</h4>
              <ul className="[&_li]:list-disc flex flex-col space-y-4 text-xl hover:[&_li_a]:underline [&_li_a]:underline-offset-4">
                <li>
                  <a href="#customer-service">Help Center</a>
                </li>
                <li>
                  <a href="#affiliates">Affiliates</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-10 min-w-[235px]">
              <h4>About us</h4>
              <ul className="[&_li]:list-disc flex flex-col space-y-4 text-xl [&_li_a]:capitalize hover:[&_li_a]:underline [&_li_a]:underline-offset-4">
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/news&events">events</Link>
                </li>
                <li>
                  <a href="#policy">terms & services</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-white px-4 py-7 relative">
          <span>
            Copyright © {current_year} Designed by : Intellisoft Nepal Pvt. Ltd.
            All Rights Reserved.
          </span>
          <div
            onClick={scrollToTop}
            className="w-20 h-20 bg-[#41BAE3] absolute -right-2 -top-8 flex items-center justify-center"
          >
            <picture>
              <img src="up-arrow.svg" alt="up-arrow" width={45} height={22} />
            </picture>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
