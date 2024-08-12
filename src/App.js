import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import ProjectPage from "./pages/projectpage";
import Knest from "./pages/KNest";
import TailwindProject from "./pages/tailwindProject";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import { ThemeProvider } from "./context/themeContext";

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
            path={"/projects"}
            element={
              <>
                <ProjectPage />
              </>
            }
          />
          <Route
            exact
            path={"/projects/tailwind-project"}
            element={
              <>
                <TailwindProject />
              </>
            }
          />
          <Route
            exact
            path={"/projects/knest-project"}
            element={
              <>
                <Knest />
              </>
            }
          />
          <Route
            exact
            path={"/projects/portfolio-project"}
            element={
              <>
                <Portfolio />
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
