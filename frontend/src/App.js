// import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Resume from "./components/Resume";
// import Projects from "./components/Projects";
// import About from "./components/About";

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
