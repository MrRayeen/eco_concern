import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./products.css";
import Button from "./Buttons/button";
import ProductCard from "./Product Card/product-card";

const Products = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      modules: [Navigation],
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // Responsive breakpoints
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <section className="py-14">
      <div className="container mx-auto flex flex-col py-2 space-y-20 items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center space-y-8 mb-12">
          <h3>Our Products</h3>
          <h2>EcoConcern Products</h2>
        </div>
        <div className="w-full relative">
          <div className="swiper-container">
            <div className="swiper-wrapper [&_div]:flex [&_div]:flex-col [&_div]:gap-8 [&_div_span]:text-xl [&_div_span]:font-medium ">
              <ProductCard
                imgPath={"iron-test-kit.png"}
                name={"Iron Test Kit"}
              />
              <ProductCard
                imgPath={"eco-septic-tank.png"}
                name={"Eco Septic Tank 2000 mL"}
              />
              <ProductCard
                imgPath={"arsenic-test-kit.png"}
                name={"Arsenic Test Kit"}
              />
              <ProductCard
                imgPath={"vial-pocket-incubator.png"}
                name={"Vial Pocket Incubator"}
              />
              <ProductCard
                imgPath={"iron-test-kit.png"}
                name={"Iron Test Kit"}
              />
              <ProductCard
                imgPath={"eco-septic-tank.png"}
                name={"Eco Septic Tank 2000 mL"}
              />
              <ProductCard
                imgPath={"arsenic-test-kit.png"}
                name={"Arsenic Test Kit"}
              />
              <ProductCard
                imgPath={"vial-pocket-incubator.png"}
                name={"Vial Pocket Incubator"}
              />
              <ProductCard
                imgPath={"iron-test-kit.png"}
                name={"Iron Test Kit"}
              />
              <ProductCard
                imgPath={"eco-septic-tank.png"}
                name={"Eco Septic Tank 2000 mL"}
              />
              <ProductCard
                imgPath={"arsenic-test-kit.png"}
                name={"Arsenic Test Kit"}
              />
              <ProductCard
                imgPath={"vial-pocket-incubator.png"}
                name={"Vial Pocket Incubator"}
              />
            </div>
          </div>
          {/* Navigation Arrows */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <Button text={"see more"} path={"/products"} />
      </div>
    </section>
  );
};

export default Products;
