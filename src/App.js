import React from "react";
import './App.css'


import ParentFour from "./render/incorrect-optimization/ParentFour";
import ContextParent from "./render/context/ContextParent";
import { ChildA } from "./render/context/ContextChildren";

function App() {
  return (
    <div className="App">
      <ContextParent >
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
