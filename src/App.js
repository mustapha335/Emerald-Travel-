import "./App.css";
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";
import Services from "./components/services/Services";
import Data from "./components/Data";
import Destinations from "./components/destinations/Destinations";

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
      </div>
    </div>
  );
}

export default App;
