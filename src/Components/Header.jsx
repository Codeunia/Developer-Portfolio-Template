import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 dark:bg-white/10 backdrop-blur-xl rounded-full border border-white/20 px-8 py-4 flex items-center gap-10 text-white shadow-lg">
        
        <h1 className="font-serif text-xl font-semibold italic whitespace-nowrap">
         Portfolio
        </h1>

        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li className="hover:text-gray-300 cursor-pointer">Projects</li>
            <li className="hover:text-gray-300 cursor-pointer">Publications</li>
            <li className="hover:text-gray-300 cursor-pointer">
              <span className="font-semibold text-white drop-shadow-md">Founder - Ex</span>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </nav>
         <ThemeToggle /> 
      </div>
    </header>
  );
};

export default Header;
