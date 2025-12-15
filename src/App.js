import "./App.css";
import "./styles/Stepper.css";
import "./styles/Todo.css";
import "./styles/ImageSlider.css";
import "./styles/Modal.css";
import "./styles/Folder-structure.css"
import { useState } from "react";
import { FeatureFlagProvider } from "./contexts";
import TrialComponent from "./components/trial";
import LowPackageComponent from "./components/low-package";
import Stepper from "./components/stepper";
import { Example1, Example2, Example3, Example4 } from "./components/stepper";
import Todo from "./components/todo";
import ImageSlider from "./components/image-slider";
import { images } from "./constants/demoImages";
import Modal from "./components/modal";
import FolderStructure from './components/folder-structure';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      {/* <FeatureFlagProvider>
        <TrialComponent />
        <LowPackageComponent />
      </FeatureFlagProvider> */}
      {/* <Stepper list={[<Example1 />, <Example2 />, <Example3 />, <Example4 />]}></Stepper> */}
      {/* <Todo /> */}
      {/* <ImageSlider images={images}/> */}
      {/* <button onClick={() => setShowModal(!showModal)}>{showModal ? 'Hide' : "Show"}</button>
      <Modal
        headerText={"Modal Header"}
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <div>Modal Content</div>
      </Modal> */}
      <FolderStructure />
    </div>
  );
}

export default App;
