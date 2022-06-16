import "./App.css";
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";
import Services from "./components/services/Services";

function App() {
  return (
    <div className='App'>
      <div className='app-container'>
        <div className='app-wrapper'>
          <Navbar />
          <Featured />
        </div>
        <Services />
      </div>
    </div>
  );
}

export default App;
