import './App.css';
import './styles/Stepper.css'
import './styles/Todo.css';
import './styles/ImageSlider.css'
import { FeatureFlagProvider } from "./contexts";
import TrialComponent from "./components/trial";
import LowPackageComponent from "./components/low-package";
import Stepper from './components/stepper';
import { Example1, Example2, Example3, Example4 } from './components/stepper';
import Todo from './components/todo';
import ImageSlider from './components/image-slider';
import { images } from './constants/demoImages';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      {/* <FeatureFlagProvider>
        <TrialComponent />
        <LowPackageComponent />
      </FeatureFlagProvider> */}
      {/* <Stepper list={[<Example1 />, <Example2 />, <Example3 />, <Example4 />]}></Stepper> */}
      {/* <Todo /> */}
      <ImageSlider images={images}/>
    </div>
  );
}

export default App;
