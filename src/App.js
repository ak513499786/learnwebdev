import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import HomePage from "./pages/homepage.jsx";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import BlogPage from "./pages/blogpage.jsx";
import IntroPage from "./pages/intro-to-html.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import ProjectPage from "./pages/project.jsx";
import Project1 from "./pages/project1.jsx";
import Project2 from "./pages/project1 1.jsx";
import Project3 from "./pages/project1 2.jsx";
import HTMLTags from "./pages/html-tags.jsx";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path={"/"}
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            exact
            path={"/about"}
            element={
              <>
                <AboutPage />
              </>
            }
          />
          <Route
            exact
            path={"/contact"}
            element={
              <>
                <ContactPage />
              </>
            }
          />
          <Route
            exact
            path={"/blogs"}
            element={
              <>
                <BlogPage />
              </>
            }
          />
          <Route
            exact
            path={"/blogs/introduction-to-html"}
            element={
              <>
                <IntroPage />
              </>
            }
          />
          <Route
            exact
            path={"/blogs/types-of-tags"}
            element={
              <>
                <HTMLTags />
              </>
            }
          />
          <Route
            exact
            path={"/projects"}
            element={
              <>
                <ProjectPage />
              </>
            }
          />
          <Route
            exact
            path={"/projects/codelinear-project"}
            element={
              <>
                <Project1 />
              </>
            }
          />
          <Route
            exact
            path={"/projects/parallel-project"}
            element={
              <>
                <Project2 />
              </>
            }
          />
          <Route
            exact
            path={"/projects/codelinear-internship-project"}
            element={
              <>
                <Project3 />
              </>
            }
          />
        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
