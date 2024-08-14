import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./products.css";
import Review from "./Reviews/review";

const Testimonial = () => {
  useEffect(() => {
    new Swiper(".swiper-container-1", {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
      },
    });
  }, []);

  return (
    <section className="py-14 bg-primary pb-[400px]">
      <div className="container mx-auto flex flex-col py-2 space-y-16 items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center space-y-8 mb-12">
          <h3>Testimonials</h3>
          <h2 className="text-center">
            Over 1,000 satisfied customers with <br /> a 5-Star reviews
          </h2>
        </div>
        <div className="w-full relative">
          <div className="swiper-container-1">
            <div className="swiper-wrapper [&_div_span]:font-medium ">
              <div className="swiper-slide !flex space-x-7 items-center">
                <Review
                  pp={"christopher.png"}
                  name={"Christopher"}
                  review="Great Service and Good Quality Product and it
helped my wife osteoarthritis on her knees and hips
and myself for arthritis. We have asked our doctor
before we used it he said it is fine because we are on
other medications. We have recommended to our
friends and family in United States they have order
and have been using Rumatis Cream. Thank You very
much. Whoever has invented this cream. Kind
Regards."
                />
                <div className="flex flex-col space-y-7">
                  <Review
                    pp={"nyla.png"}
                    name={"Nyla Shaw"}
                    review="Excellent selection of products, very good prices and
super fast delivery to the US."
                  />
                  <Review
                    pp={"daniel.png"}
                    name={"Daniel Mark"}
                    review="Great customer service! I had to make a change to my
order and the customer service was extremely helpful
and responded quickly. They adjusted my order
without issue."
                  />
                </div>
                <Review
                  pp={"jessica.png"}
                  name={"Jessica"}
                  review="We have recommended to our friends and family in
United States they have order and have been using
Rumatis Cream. Thank You very much. Whoever has
invented this cream. Kind Regards."
                />
              </div>
              <div className="swiper-slide !flex space-x-7 items-center">
                <Review
                  pp={"christopher.png"}
                  name={"Christopher"}
                  review="Great Service and Good Quality Product and it
helped my wife osteoarthritis on her knees and hips
and myself for arthritis. We have asked our doctor
before we used it he said it is fine because we are on
other medications. We have recommended to our
friends and family in United States they have order
and have been using Rumatis Cream. Thank You very
much. Whoever has invented this cream. Kind
Regards."
                />
                <div className="flex flex-col space-y-7">
                  <Review
                    pp={"nyla.png"}
                    name={"Nyla Shaw"}
                    review="Excellent selection of products, very good prices and
super fast delivery to the US."
                  />
                  <Review
                    pp={"daniel.png"}
                    name={"Daniel Mark"}
                    review="Great customer service! I had to make a change to my
order and the customer service was extremely helpful
and responded quickly. They adjusted my order
without issue."
                  />
                </div>
                <Review
                  pp={"jessica.png"}
                  name={"Jessica"}
                  review="We have recommended to our friends and family in
United States they have order and have been using
Rumatis Cream. Thank You very much. Whoever has
invented this cream. Kind Regards."
                />
              </div>
            </div>
          </div>
          {/* Navigation Arrows */}
          <div className="swiper-button-prev-1"></div>
          <div className="swiper-button-next-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
