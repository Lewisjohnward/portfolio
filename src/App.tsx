import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <div className="text-sm md:text-base h-[100dvh] flex flex-col max-w-2xl m-auto p-2 md:py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:project" element={<Project />} />
          <Route path="/*" element={<div>not found!</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
