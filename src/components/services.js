import React from "react";
import ServiceItem from "./Service-Items/service-item";

const Services = () => {
  return (
    <div className="bg-secondary rounded-[80px] w-full max-w-[1440px] px-10 pb-14 mx-auto absolute -bottom-[30%] right-0 left-0">
      <div className="grid xl:grid-cols-3 gap-x-5 gap-y-14 justify-items-center -mt-16">
        <ServiceItem
          imgPath={"lab.svg"}
          title={"Lab Services"}
          descrip={"Eco Concern provides laboratory services through ENPHO Lab"}
        />
        <ServiceItem
          imgPath={"leaf.svg"}
          title={"Production"}
          descrip={
            "Eco Concern produces water treatment, sanitation, and energy products"
          }
        />
        <ServiceItem
          imgPath={"gear.svg"}
          title={"Consultancy Services"}
          descrip={"EcoConcern offers consultancy for Feacal Sludge treatment"}
        />
        <ServiceItem
          imgPath={"book.svg"}
          title={"Training"}
          descrip={
            "Eco Concern offers training in water quality testing and FSM lab setup"
          }
        />
        <ServiceItem
          imgPath={"euro.svg"}
          title={"Business Development"}
          descrip={
            "Eco Concern offers complete project  management for FSM projects"
          }
        />
        <ServiceItem
          imgPath={"leaf-cycle.svg"}
          title={"Product Training"}
          descrip={
            "Eco Concern provides Environmental Products Trading of Eco Septic Tank."
          }
        />
      </div>
    </div>
  );
};

export default Services;
