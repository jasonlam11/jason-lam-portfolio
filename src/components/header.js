import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-500/20">
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    <div className="text-xl font-bold text-white hover:text-red-400 transition-colors duration-300 cursor-pointer">
                        JL
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium">
                            About
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium">
                            Projects
                        </a>
                        <a href="#skills" className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium">
                            Skills
                        </a>
                        <a href="#experience" className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium">
                            Experience
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium">
                            Contact
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-red-500/20">
                        <div className="flex flex-col space-y-4 mt-4">
                            <a href="#home" className="text-gray-300 hover:text-red-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </a>
                            <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                About
                            </a>
                            <a href="#projects" className="text-gray-300 hover:text-red-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                Projects
                            </a>
                            <a href="#skills" className="text-gray-300 hover:text-red-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                Skills
                            </a>
                            <a href="#experience" className="text-gray-300 hover:text-red-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                Experience
                            </a>
                            <a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;