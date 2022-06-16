import "./App.css";
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <div className='app-container'>
        <div className='app-wrapper'>
          <Navbar />
          <Featured />
        </div>
      </div>
    </div>
  );
}

export default App;
