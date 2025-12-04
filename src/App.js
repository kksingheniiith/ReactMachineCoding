import logo from './logo.svg';
import './App.css';
import './styles/Stepper.css'
import { FeatureFlagProvider } from "./contexts";
import TrialComponent from "./components/trial";
import LowPackageComponent from "./components/low-package";
import Stepper from './components/stepper';
import { Example1, Example2, Example3, Example4 } from './components/stepper';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      {/* <FeatureFlagProvider>
        <TrialComponent />
        <LowPackageComponent />
      </FeatureFlagProvider> */}
      <Stepper list={[<Example1 />, <Example2 />, <Example3 />, <Example4 />]}></Stepper>
    </div>
  );
}

export default App;
