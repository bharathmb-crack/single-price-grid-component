import "./App.css";
import Monthly from "./Monthly";
import OurCommunity from "./OurCommunity";

function App() {
  return (
    <div className="App">
      <div className="container">
        <OurCommunity />
        <div className="halfcontainer">
          <Monthly />
        </div>
      </div>
    </div>
  );
}

export default App;
