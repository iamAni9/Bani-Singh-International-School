import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-screen lg:px-3 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="relative flex lg:flex-row flex-col justify-between p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse sm:mb-0 mb-3">
                        <img src="Logo.png" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center sm:text-2xl text-lg font-semibold whitespace-nowrap dark:text-white">Bani Singh International School</span>
                    </a>
                    <div className={`items-center justify-between w-full lg:flex lg:w-auto md:order-1 ${isMenuOpen ? 'absolute top-full left-0' : 'hidden'}`}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <span onClick={() => scrollToSection('home')} className="block py-2 px-3 select-none cursor-pointer text-gray-900 rounded hover:bg-blue-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</span>
                            </li>
                            <li>
                                <span onClick={() => scrollToSection('about')} className="block py-2 px-3 select-none cursor-pointer text-gray-900 rounded hover:bg-blue-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</span>
                            </li>
                            <li>
                                <a href="#" onClick={() => scrollToSection('gallery')} className="block py-2 px-3 text-gray-900 rounded opacity-50 cursor-not-allowed hover:bg-blue-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => scrollToSection('students')} className="block py-2 px-3 text-gray-900 rounded opacity-50 cursor-not-allowed hover:bg-blue-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Student's Section</a>
                            </li>
                            <li>
                                <span onClick={() => scrollToSection('contact')} className="block py-2 px-3 select-none cursor-pointer text-gray-900 rounded hover:bg-blue-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</span>
                            </li>
                        </ul>
                    </div>
                    {/* Hamburger menu icon */}
                    <button id="menu-toggle" className="block lg:hidden ml-auto" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
