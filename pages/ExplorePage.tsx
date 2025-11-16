import React, { useState, useEffect } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { articles, communityPosts } from '../constants/data';
import PageWrapper from '../components/PageWrapper';

const ExplorePage: React.FC = () => {
    const { t } = useLocalization();
    const [activeTab, setActiveTab] = useState('articles');
    
    const tabs = ['articles', 'discussions', 'videos', 'projects', 'jobBoard'];

    const renderContent = () => {
        switch (activeTab) {
            case 'articles':
                return (
                    <div className="space-y-4">
                        {articles.map(article => (
                            <div key={article.id} className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm flex items-start space-x-4 rtl:space-x-reverse">
                                <img src={article.thumbnailUrl} alt={t(article.titleKey as any)} className="w-24 h-24 rounded-lg object-cover" />
                                <div className="flex-grow">
                                    <p className="text-xs font-bold uppercase text-gdg-blue">{t(article.categoryKey as any)}</p>
                                    <h3 className="font-bold text-gray-900 dark:text-white mt-1">{t(article.titleKey as any)}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                        by {article.author.name} - {article.publishDate}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'discussions':
                return (
                    <div className="space-y-4">
                        {communityPosts.map(post => (
                            <div key={post.id} className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm">
                                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                                    <img src={post.author.avatarUrl} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">{post.author.name}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{post.timestamp}</p>
                                    </div>
                                </div>
                                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mt-3">{t(post.titleKey as any)}</h3>
                                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-3">
                                   <span className="text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-md">{t(post.categoryKey as any)}</span>
                                   <p>{post.replies} replies</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return <p className="text-center text-gray-500 dark:text-gray-400 mt-8">{t(activeTab as any)} coming soon.</p>;
        }
    };

    return (
        <PageWrapper>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                {t('exploreTitle')}
            </h1>
            <div className="flex overflow-x-auto space-x-2 rtl:space-x-reverse border-b border-gray-200 dark:border-gray-700 mb-6">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-semibold whitespace-nowrap transition-colors ${
                            activeTab === tab 
                                ? 'border-b-2 border-saudi-teal text-saudi-teal' 
                                : 'text-gray-500'
                        }`}
                    >
                        {t(tab as any)}
                    </button>
                ))}
            </div>
            <div>{renderContent()}</div>
        </PageWrapper>
    );
};

export default ExplorePage;