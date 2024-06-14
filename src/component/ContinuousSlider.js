import React, { useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Handle from 'rc-slider/lib/Handles/Handle';


const ContinuousSlider = () => {
  const [sliderValue, setSliderValue] = useState(20);

const handleChange=(value)=>{
  setSliderValue(value);
  console.log(value);
};
  return (
    <> <Slider  value={sliderValue} onChange={handleChange}/></>
  )
}

export default ContinuousSlider