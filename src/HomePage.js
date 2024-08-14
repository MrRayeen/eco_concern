import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Products from "./components/products";
import About from "./components/about";
import Footer from "./components/footer";
import Testimonial from "./components/testimonial";
import Project from "./components/project";

function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Products />
      <Project />
      <Testimonial />
      <Footer />
    </main>
  );
}

export default HomePage;
