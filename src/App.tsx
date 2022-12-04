import React, { useState } from "react";
import BackgroundSelector from "./selectors/BackgroundSelector";

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="App">
      <BackgroundSelector id={currentSlide} />{" "}
    </div>
  );
}

export default App;
