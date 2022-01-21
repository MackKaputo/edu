import { GlobalNav } from "./components"
import { Home, Courses, Course, MyCourses } from "./pages"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MyCoursesRoute from "./routes/MyCoursesRoute";

function App() {
  return (
    <BrowserRouter>
      <GlobalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element ={<Courses />} />
        <Route path="/courses/:course_id" element = {<MyCoursesRoute />}>
          <Route path="/courses/:course_id" element={<Course />} />
        </Route>
        <Route path="/mycourses" element={<MyCoursesRoute />}>
          <Route path="/mycourses" element={<MyCourses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
