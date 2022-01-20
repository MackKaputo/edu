import { GlobalNav } from "./components"
import { Home, Courses, Course } from "./pages"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element ={<Courses />} />
        <Route path="/courses/:course_id" element = {<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
