import { useLayoutEffect, useRef } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="py-24 mx-auto max-w-screen-xl ">
        <div className="flex justify-between gap-4 responsive-wrap">
          <header className="w-[48%] flex-none justify-between bg-green-500/30 name-div">
            <h1 className="mb-1 text-2xl font-bold">Danish Rafid Rajendra</h1>
            <h2 className="text-lg font-bold">Software Engineer</h2>
          </header>

          <div className="text-left bg-green-500/3">
            <h2 className="text-lg">Software Engineer</h2>
            <p className="">
              I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
