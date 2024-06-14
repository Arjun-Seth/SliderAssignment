import React, { useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const DualRangeSlider = () => {
  const [sliderValue, setSliderValue] = useState([30, 60]);
  const handleChange=(value)=>{
    setSliderValue(value);
    console.log(value);
  };
  return (
    <> <Slider range allowCross={false}  value={sliderValue} onChange={handleChange} /></>
  )
}

export default DualRangeSlider