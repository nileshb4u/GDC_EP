
import React, { useState, useEffect } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Page } from '../types';
import { MoonIcon, SunIcon } from './icons';

interface HeaderProps {
    currentPage: Page;
    onNavClick: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavClick }) => {
    const { language, setLanguage, t } = useLocalization();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
        document.documentElement.lang = newLang;
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    };

    const navLinks = Object.values(Page);

    const NavLinkItems = () => (
        <>
            {navLinks.map((page) => (
                <li key={page}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onNavClick(page);
                            setIsMenuOpen(false);
                        }}
                        className={`block py-2 px-3 rounded transition-colors duration-200 ${currentPage === page
                                ? 'text-saudi-teal font-bold dark:text-saudi-teal'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-saudi-teal md:p-0'
                            }`}
                    >
                        {t(page)}
                    </a>
                </li>
            ))}
        </>
    );

    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-600">
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" onClick={(e) => {e.preventDefault(); onNavClick(Page.Home)}} className="flex items-center space-x-3 rtl:space-x-reverse">
                     <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.826 12.0019C21.826 11.2319 21.655 10.4819 21.328 9.79187L12.022 1.34887L2.73199 9.78087C2.39999 10.4769 2.22899 11.2319 2.22899 12.0019C2.22899 12.0199 2.22999 12.0379 2.22999 12.0559H2.23599L12.022 21.6519L21.812 12.0499C21.821 12.0349 21.826 12.0189 21.826 12.0019Z" fill="#EA4335"></path><path d="M12.022 1.34888L2.23599 12.0559V12.0019C2.22899 11.2319 2.39999 10.4769 2.73199 9.78088L12.022 1.34888Z" fill="#FBBC05"></path><path d="M12.022 21.6519L2.23599 12.0499V12.0559H21.812L12.022 21.6519Z" fill="#34A853"></path><path d="M21.826 12.0019C21.826 17.4209 17.418 21.8279 12.001 21.8279C11.691 21.8279 11.385 21.8139 11.085 21.7859L21.813 12.0499C21.821 12.0349 21.826 12.0189 21.826 12.0019Z" fill="#4285F4"></path></svg>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden sm:inline-block">GDG Eastern Province</span>
                </a>
                <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <button onClick={toggleLanguage} className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-bold">
                       {t('languageToggle')}
                    </button>
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                        {isDarkMode ? <SunIcon /> : <MoonIcon />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <NavLinkItems />
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;