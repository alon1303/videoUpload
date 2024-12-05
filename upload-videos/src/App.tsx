import "./App.css";
import UploadVideo from "./UploadVideo";

function App() {
  return (
    <div className="min-h-full h-full min-w-96 grid grid-rows-3">
      <h1 className="min-w-full text-5xl mt-5 mb-5">Shorts Generator</h1>
      <UploadVideo></UploadVideo>
    </div>
  );
}

export default App;
