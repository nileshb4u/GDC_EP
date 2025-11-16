
import React, { useState, useEffect } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { MoonIcon, SunIcon } from './icons';

interface HeaderProps {
    onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
    const { language, setLanguage, t } = useLocalization();
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark';
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    };
    
    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 h-16">
                <a href="#" onClick={(e) => {e.preventDefault(); onLogoClick()}} className="flex items-center space-x-3 rtl:space-x-reverse">
                     <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.826 12.0019C21.826 11.2319 21.655 10.4819 21.328 9.79187L12.022 1.34887L2.73199 9.78087C2.39999 10.4769 2.22899 11.2319 2.22899 12.0019C2.22899 12.0199 2.22999 12.0379 2.22999 12.0559H2.23599L12.022 21.6519L21.812 12.0499C21.821 12.0349 21.826 12.0189 21.826 12.0019Z" fill="#EA4335"></path><path d="M12.022 1.34888L2.23599 12.0559V12.0019C2.22899 11.2319 2.39999 10.4769 2.73199 9.78088L12.022 1.34888Z" fill="#FBBC05"></path><path d="M12.022 21.6519L2.23599 12.0499V12.0559H21.812L12.022 21.6519Z" fill="#34A853"></path><path d="M21.826 12.0019C21.826 17.4209 17.418 21.8279 12.001 21.8279C11.691 21.8279 11.385 21.8139 11.085 21.7859L21.813 12.0499C21.821 12.0349 21.826 12.0189 21.826 12.0019Z" fill="#4285F4"></path></svg>
                    <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white hidden sm:inline-block">{t('appName')}</span>
                </a>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <button onClick={toggleLanguage} className="p-2 w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full font-bold transition-colors">
                       {t('languageToggle')}
                    </button>
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                        {isDarkMode ? <SunIcon className="w-5 h-5"/> : <MoonIcon className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
