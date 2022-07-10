import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [showTransition, setShowTransition] = useState(false);
  const [transitionGroupElements, setTransitionGroupElements] = useState(1);

  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <label className="form-label border b-0">Tansition</label>
          <div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                checked={showTransition}
                onClick={() => setShowTransition(!showTransition)}
              />
              <label className="form-check-label">Display</label>
            </div>
            <XyzTransition appear xyz="fade">
              {showTransition && (
                <div className="container">
                  <XyzTransitionGroup
                    className="row"
                    appear
                    xyz="fade stagger small"
                  >
                    <div className="col square border bg-primary" />
                    <div className="col square border bg-primary" />
                    <div className="col square border bg-primary" />
                    <div className="col square border bg-primary" />
                  </XyzTransitionGroup>
                  <XyzTransitionGroup
                    className="row"
                    appear
                    xyz="fade stagger small"
                  >
                    <div className="col square border bg-primary" />
                    <div className="col square border bg-primary" />
                    <div className="col square border bg-primary" />
                  </XyzTransitionGroup>
                  <XyzTransitionGroup
                    className="row"
                    appear
                    xyz="fade stagger small"
                  >
                    <div className="col square border bg-primary" />
                    <div className="col square border bg-primary" />
                  </XyzTransitionGroup>
                  <XyzTransitionGroup
                    className="row"
                    appear
                    xyz="fade stagger small"
                  >
                    <div className="col square border bg-primary" />
                  </XyzTransitionGroup>
                </div>
              )}
            </XyzTransition>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <label className="form-label border">TransitionGroup</label>
          <div>
            <button
              className="btn btn-secondary border"
              onClick={() =>
                setTransitionGroupElements(transitionGroupElements + 1)
              }
            >
              Add
            </button>
            <button
              className="btn btn-secondary border"
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
            <div className="container">
              <XyzTransitionGroup
                className="row"
                appear
                xyz="fade small out-down out-rotate-right appear-stagger"
              >
                {[...Array(transitionGroupElements)].map((_, index) => (
                  <div
                    className="square col border bg-primary"
                    key={index}
                  ></div>
                ))}
              </XyzTransitionGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
