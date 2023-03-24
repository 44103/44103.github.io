import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Bookshelf from "./components/Bookshelf/Bookshelf";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skill />
      <Bookshelf />
      <Footer />
    </>
  );
}

export default App;
