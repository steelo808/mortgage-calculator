import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  );
};

export default SliderSelect;
