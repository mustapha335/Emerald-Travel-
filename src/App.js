import "./App.css";
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";
import Services from "./components/services/Services";
import Data from "./components/Data";
import Destinations from "./components/destinations/Destinations";
import Packages from "./components/Packages/Packages";

function App() {
  return (
    <div className='App'>
      <div className='app-container'>
        <div className='app-wrapper'>
          <Navbar />
          <Featured />
        </div>
        <Services />
        <Data />
        <Destinations />
        <Packages />
      </div>
    </div>
  );
}

export default App;
