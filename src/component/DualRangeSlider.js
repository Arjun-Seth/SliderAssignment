import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const DualRangeSlider = () => {
  return (
    <> <Slider range allowCross={false} defaultValue={[30, 60]} /></>
  )
}

export default DualRangeSlider