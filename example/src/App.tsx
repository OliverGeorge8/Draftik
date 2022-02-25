import Draft from "../../src/Context";
import Editor from "../../src/Editor"
import "./App.css";
import InlineStylesBar from "./toolbar/InlineStyles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Draft>
          <InlineStylesBar/>
          <Editor decorators={[]}/>
        </Draft>
      </header>
    </div>
  );
}

export default App;
