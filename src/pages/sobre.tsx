import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBusinessSettings, getGeneralSettings } from '@/lib/settings';
import { PageSection } from '@/components/commons/PageSection';

interface SobreProps {
  businessSettings: any;
  generalSettings: any;
}

const Sobre = ({ businessSettings, generalSettings }: SobreProps) => {
  const { t, language } = useLanguage();
  const [activeCard, setActiveCard] = useState<'education' | 'specialization' | null>(null);
  const metaTitle = `${t('navigation.about')} | ${businessSettings.brandName}`;
  const metaDescription = language === 'pt'
    ? `Conheça mais sobre ${businessSettings.brandName} - ${businessSettings.brandDescription}`
    : `Learn more about ${businessSettings.brandName} - ${businessSettings.brandDescription}`;
  
  const handleCardClick = (card: 'education' | 'specialization') => {
    setActiveCard(activeCard === card ? null : card);
    
    // Scroll para a seção correspondente
    setTimeout(() => {
      if (card === 'education') {
        const educationSection = document.getElementById('education-section');
        if (educationSection) {
          educationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (card === 'specialization') {
        const specializationSection = document.getElementById('specialization-section');
        if (specializationSection) {
          specializationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
  };
  
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta
          name="description"
          content={metaDescription}
        />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
      </Head>

      <div className="min-h-screen">
        <PageSection
          title={t('about.title')}
          subtitle=""
          vPadding="py-20"
        >
          <div className="col-span-full">
            <div className="prose prose-lg max-w-none mx-auto">
              {/* Education and Specialization blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
                <button
                  onClick={() => handleCardClick('education')}
                  className={`group relative px-3 sm:px-4 py-4 sm:py-5 md:py-6 rounded-xl text-center font-semibold overflow-hidden shadow-lg transition-all duration-500 animate-fade-in-up ${
                    activeCard === 'education'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white shadow-2xl scale-105 -translate-y-3 border-2 border-blue-400 dark:border-blue-500'
                      : 'bg-white dark:bg-blue-950 text-gray-900 dark:text-gray-100 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 cursor-pointer'
                  }`}
                  style={{
                    animationDelay: '0ms',
                    opacity: 0
                  }}
                >
                  
                  {/* Borda sutil que aparece no hover ou quando ativo */}
                  <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 pointer-events-none ${
                    activeCard === 'education'
                      ? 'border-blue-400 dark:border-blue-500'
                      : 'border-transparent group-hover:border-gray-200 dark:group-hover:border-slate-700'
                  }`}></div>
                  
                  {/* Conteúdo */}
                  <div className="relative z-10">
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 transform transition-transform duration-300 ${
                      activeCard === 'education'
                        ? 'text-white scale-105'
                        : 'text-gray-900 dark:text-gray-100 group-hover:scale-105'
                    }`}>
                      {t('about.education.title')}
                    </h3>
                    <p className={`text-base sm:text-lg font-bold ${
                      activeCard === 'education'
                        ? 'text-white'
                        : 'text-gray-900 dark:text-gray-200'
                    }`}>
                      {t('about.education.degree')}
                    </p>
                  </div>
                  
                  {/* Efeito de brilho animado no canto */}
                  <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl transition-all duration-500 pointer-events-none ${
                    activeCard === 'education'
                      ? 'bg-blue-400/20 from-blue-400/20 to-purple-400/20'
                      : 'bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10'
                  }`}></div>
                </button>
                
                <button
                  onClick={() => handleCardClick('specialization')}
                  className={`group relative px-3 sm:px-4 py-4 sm:py-5 md:py-6 rounded-xl text-center font-semibold overflow-hidden shadow-lg transition-all duration-500 animate-fade-in-up ${
                    activeCard === 'specialization'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white shadow-2xl scale-105 -translate-y-3 border-2 border-blue-400 dark:border-blue-500'
                      : 'bg-white dark:bg-blue-950 text-gray-900 dark:text-gray-100 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 cursor-pointer'
                  }`}
                  style={{
                    animationDelay: '50ms',
                    opacity: 0
                  }}
                >
                  
                  {/* Borda sutil que aparece no hover ou quando ativo */}
                  <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 pointer-events-none ${
                    activeCard === 'specialization'
                      ? 'border-blue-400 dark:border-blue-500'
                      : 'border-transparent group-hover:border-gray-200 dark:group-hover:border-slate-700'
                  }`}></div>
                  
                  {/* Conteúdo */}
                  <div className="relative z-10">
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 transform transition-transform duration-300 ${
                      activeCard === 'specialization'
                        ? 'text-white scale-105'
                        : 'text-gray-900 dark:text-gray-100 group-hover:scale-105'
                    }`}>
                      {t('about.specialization.title')}
                    </h3>
                    <p className={`text-base sm:text-lg font-bold ${
                      activeCard === 'specialization'
                        ? 'text-white'
                        : 'text-gray-900 dark:text-gray-200'
                    }`}>
                      {t('about.specialization.area')}
                    </p>
                  </div>
                  
                  {/* Efeito de brilho animado no canto */}
                  <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl transition-all duration-500 pointer-events-none ${
                    activeCard === 'specialization'
                      ? 'bg-blue-400/20 from-blue-400/20 to-purple-400/20'
                      : 'bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10'
                  }`}></div>
                </button>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
                <div className="flex-shrink-0 flex flex-row sm:flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center lg:justify-start w-full lg:w-auto">
                  <Image
                    src="/img/perfil2.jpeg"
                    alt="Lucas Banheti"
                    width={256}
                    height={256}
                    className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl"
                  />
                  <Image
                    src="/img/perfil3.jpeg"
                    alt="Lucas Banheti working"
                    width={256}
                    height={256}
                    className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl"
                  />
                </div>
                <div className="flex-1 w-full">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                    {t('about.introduction')}
                  </p>
                  
                  <div id="education-section" className="mb-6 sm:mb-7 md:mb-8 scroll-mt-20">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      {t('about.services.title')}
                    </h3>
                    <ul className="text-base sm:text-lg text-gray-700 dark:text-gray-300 space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6 list-disc list-inside">
                      {t('about.services.items').map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 sm:mb-7 md:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      {t('about.whyChoose.title')}
                    </h3>
                    <ul className="text-base sm:text-lg text-gray-700 dark:text-gray-300 space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6 list-disc list-inside">
                      {t('about.whyChoose.items').map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div id="specialization-section" className="mb-6 sm:mb-7 md:mb-8 scroll-mt-20">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      {t('about.skills.title')}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                      <div>
                        <h4 className="font-semibold mb-1.5 sm:mb-2">{t('about.skills.frontend')}</h4>
                        <p className="text-sm sm:text-base">{t('about.skills.frontendTechs')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1.5 sm:mb-2">{t('about.skills.backend')}</h4>
                        <p className="text-sm sm:text-base">{t('about.skills.backendTechs')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1.5 sm:mb-2">{t('about.skills.deploy')}</h4>
                        <p className="text-sm sm:text-base">{t('about.skills.deployTechs')}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </PageSection>


      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<SobreProps> = async () => {
  const businessSettings = getBusinessSettings();
  const generalSettings = getGeneralSettings();

  return {
    props: {
      businessSettings,
      generalSettings,
    },
  };
};

export default Sobre;
