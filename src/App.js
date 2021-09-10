// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutTExt=" About" />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
