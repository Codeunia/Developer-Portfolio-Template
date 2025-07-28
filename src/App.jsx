import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white antialiased transition-colors duration-300 scroll-smooth">
      <Header />
      <main className="mt-[50px]">
        <section id="about">
          <About />
          <Skills/>
          <Projects/>
        </section>
      </main>
    </div>
  );
}

export default App;
