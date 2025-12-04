import React, { useState } from "react";

function Stepper({ list }) {
  const stepperLength = list.length;
  const steps = [];
  const [currentStep, setCurrentStep] = useState(0);

  for (let i = 0; i < stepperLength; i++) {
    steps.push(
      <div className={`step ${i <= currentStep ? "active" : ""}`} key={i}>
        {i + 1}
      </div>
    );
  }

  const progressBarWidth = (currentStep / (stepperLength - 1)) * 100;

  const onPrev = () => {
    setCurrentStep(currentStep-1);
  }

  const onNext = () => {
    setCurrentStep(currentStep+1);
  }

  return (
    <div className="stepper-wrapper">
      <div className="steps">{steps}
        <div className="progress-bar" style={{ width: `${progressBarWidth}%` }}></div>
      </div>
      <div className="step-content">{list[currentStep]}</div>
      <div className="step-controls">
        <button onClick={onPrev}>Back</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export function Example1() {
  return <div>Example 1</div>;
}

export function Example2() {
  return <div>Example 2</div>;
}

export function Example3() {
  return <div>Example 3</div>;
}

export function Example4() {
  return <div>Example 4</div>;
}

export default Stepper;
