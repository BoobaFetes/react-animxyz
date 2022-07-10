import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [showTransition, setShowTransition] = useState(false);
  const [transitionGroupElements, setTransitionGroupElements] = useState(1);

  return (
    <div className="App">
      <div>
        <div>Tansition</div>
        <XyzTransition mode="out-in">
          <div className="App-anim-placeholder">
            <button onClick={() => setShowTransition(!showTransition)}>
              toggled
            </button>
            const toggled = false
            <XyzTransition appear xyz="fade rotate-right ease-out-back">
              {showTransition && <div className="square" />}
            </XyzTransition>
          </div>
        </XyzTransition>
      </div>
      <div>
        <div>TransitionGroup</div>
        <button
          onClick={() =>
            setTransitionGroupElements(transitionGroupElements + 1)
          }
        >
          Add
        </button>
        const toggled = false
        <button
          onClick={() => {
            if (transitionGroupElements <= 0) {
              setTransitionGroupElements(0);
            } else {
              setTransitionGroupElements(transitionGroupElements - 1);
            }
          }}
        >
          Remove
        </button>
        const toggled = false
        <XyzTransitionGroup
          appear
          className="example-grid"
          xyz="fade small out-down out-rotate-right appear-stagger"
        >
          {[...Array(transitionGroupElements)].map((_, index) => (
            <div className="square" key={index} />
          ))}
        </XyzTransitionGroup>
      </div>
    </div>
  );
}

export default App;
