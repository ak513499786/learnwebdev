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
            path={"/projects"}
            element={
              <>
                <ProjectPage />
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
