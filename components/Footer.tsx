import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { socialLinks } from '../constants/data';

const Footer: React.FC = () => {
    const { t } = useLocalization();

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-screen-xl mx-auto p-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div className="text-center md:text-left rtl:md:text-right">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">Google Developer Chapter – Eastern Province</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">{t('footerText')}</p>
                    </div>
                    <div className="flex space-x-6 rtl:space-x-reverse">
                        {socialLinks.map(({ name, url, Icon }) => (
                            <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}
                                className="text-gray-500 hover:text-gdg-blue dark:text-gray-400 dark:hover:text-gdg-blue transition-colors duration-300">
                                <Icon className="w-7 h-7" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-center items-center text-sm text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                    <a href="#" className="hover:underline">{t('privacyPolicy')}</a>
                    <span>|</span>
                    <a href="#" className="hover:underline">{t('codeOfConduct')}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
