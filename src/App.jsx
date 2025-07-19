import { useTheme } from './ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Hello, {theme} mode!</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
