import React from "react";

import 'rc-slider/assets/index.css';
import ContinuousSlider from "./component/ContinuousSlider";
import DiscreteSlider from "./component/DiscreteSlider";
import DualRangeSlider from "./component/DualRangeSlider";

function App() {
  return (
    <>
  <ContinuousSlider />
  <br />
<DiscreteSlider />
  <br />
  <DualRangeSlider />
    </>
  );
}

export default App;
