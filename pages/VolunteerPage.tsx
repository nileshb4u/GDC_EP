
import React, { useState } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import Button from '../components/Button';

const VolunteerPage: React.FC = () => {
  const { t } = useLocalization();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  
  const interestAreas = ['interestPM', 'interestCM', 'interestSponsorship', 'interestStudent'];

  const renderInput = (id: string, labelKey: string, type: string = 'text', required: boolean = true) => (
      <div>
          <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t(labelKey as any)}</label>
          <input type={type} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-saudi-teal focus:border-saudi-teal block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" required={required} />
      </div>
  );

  return (
    <div className="bg-white dark:bg-gray-900 py-20 animate-fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          {t('volunteerTitle')}
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12">
          {t('volunteerIntro')}
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          {submitted ? (
            <div className="text-center p-8">
                <h2 className="text-2xl font-bold text-gdg-green mb-4">{t('applicationSubmitted')}</h2>
                <Button onClick={() => setSubmitted(false)}>Submit another application</Button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                {t('applyNow')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {renderInput('fullName', 'formName')}
                {renderInput('email', 'formEmail', 'email')}
                {renderInput('skills', 'formSkills')}
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('formInterests')}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {interestAreas.map(interest => (
                       <div key={interest} className="flex items-center p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                            <input id={interest} type="checkbox" value="" className="w-4 h-4 text-saudi-teal bg-gray-100 border-gray-300 rounded focus:ring-saudi-teal dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor={interest} className="w-full ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{t(interest as any)}</label>
                        </div>
                    ))}
                  </div>
                </div>

                <Button type="submit" variant="primary" className="w-full !mt-10">
                  {t('submitApplication')}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
       <style>{`
          .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default VolunteerPage;