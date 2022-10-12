import { Routes, Route} from "react-router-dom"

import Layout from "./Layout"
import Counter from "./lessons/Lesson1"
import Lesson2 from "./lessons/Lesson2";
import Lesson3 from "./lessons/Lesson3";
import Lesson4 from "./lessons/Lesson4";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Counter />} />
          <Route path="/2" element={<Lesson2 />}/>
          <Route path="/3" element={<Lesson3 />}/>
          <Route path="/4" element={<Lesson4 />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
