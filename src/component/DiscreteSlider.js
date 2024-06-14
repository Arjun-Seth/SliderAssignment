import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react'

const DiscreteSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const handleChange=(value)=>{
    setSliderValue(value);
    console.log(value);
  };
  
  return (
    <>  <Slider step={10} dots value={sliderValue} onChange={handleChange} /></>
  )
}

export default DiscreteSlider