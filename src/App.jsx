import About from './Components/About';
import Header from './Components/Header';
import ThemeToggle from './Components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white antialiased transition-colors duration-300">

      <Header />
      <main className="mt-[50px] p-10">
       <section>
        <About/>
       </section>
      </main>
    </div>
  );
}

export default App;
