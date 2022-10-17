import "./App.css";
import Monthly from "./Monthly";
import OurCommunity from "./OurCommunity";

function App() {
  return (
    <div className="App">
      <main className="container">
        <OurCommunity />
        <div className="halfcontainer">
          <Monthly />
        </div>
      </main>
    </div>
  );
}

export default App;
