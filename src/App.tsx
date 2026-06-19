import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className="w-screen h-screen bg-black"></div>
    </>
  );
}

export default App;
