// Configurações estáticas para evitar problemas com fs no cliente
const businessSettingsPT = {
  "brandName": "Lucas Banheti",
  "brandDescription": "Desenvolvedor web recém-formado em Análise e Desenvolvimento de Sistemas, com sólida base em lógica de programação, desenvolvimento web e banco de dados. Buscando iniciar carreira na área de tecnologia.",
  "brandEmail": "lucas_banheti@hotmail.com",
  "brandKeywords": ["Desenvolvedor Web", "Portfolio", "JavaScript", "Next.js", "React", "Node.js", "PHP", "MySQL", "TypeScript"],
  "brandPhone": "+55 43 99845-7205"
};

const businessSettingsEN = {
  "brandName": "Lucas Banheti",
  "brandDescription": "Recently graduated web developer in Systems Analysis and Development, with a solid foundation in programming logic, web development and databases. Looking to start a career in technology.",
  "brandEmail": "lucas_banheti@hotmail.com",
  "brandKeywords": ["Web Developer", "Portfolio", "JavaScript", "Next.js", "React", "Node.js", "PHP", "MySQL", "TypeScript"],
  "brandPhone": "+55 43 99845-7205"
};

const generalSettings = {
  "siteUrl": "https://www.loom.com/share/988daa64ab7d4d07884083d4537442cc",
  "footerText": `© ${new Date().getFullYear()} Lucas Banheti. Todos os direitos reservados. Construído com Next.js e muito ☕.`,
  "postsToShow": 6,
  "homeCategory": "Development",
  "cookieConsent": false,
  "darkModeSwitcher": true,
  "feedbackEmail": "lucas_banheti@hotmail.com",
  "publishedDate": "2025-01-15 00:00:00",
  "i18n": "en",
  "errorMessage": "Oops... something went wrong. Please try again later or contact us: lucas_banheti@hotmail.com"
};

const themeSettings = {
  "postsSettings": {
    "postsToShow": 6,
    "postMaxW": "800",
    "leftColumn": false,
    "rightColumn": false,
    "bottomRow": true,
    "adsInsidePost": false,
    "postStyleVariation": "0"
  },
  "pagesSettings": {
    "pageBottomPadding": 30,
    "pageHeaderPadding": 22,
    "pageMaxW": "1100"
  },
  "header": {
    "logoAlign": "left",
    "headerHeight": 60,
    "bottomMainMenu": false,
    "headerMainMenu": "right",
    "headerMainMenuType": "simple"
  },
  "themeColors": {
    "brand_color": "#3b82f6",
    "ctaColor": "#3b82f6",
    "background_color": "#ffffff",
    "darkBrandColor": "#60a5fa",
    "secondaryColor": "#1e293b",
    "darkBackgroundColor": "#0f172a"
  },
  "generalThemeSettings": {
    "themeStyle": "modern"
  }
};

const logos = {
  "faviconLogo": "/favicon.svg",
  "mainLogo": "/img/perfil.jpeg",
  "markLogo": "/img/perfil.jpeg",
  "cardLogo": "/img/perfil.jpeg",
  "postAuthorLogo": "/img/perfil.jpeg",
  "mainLogoWH": "375x375"
};

const mainMenu = {
  "mainMenu": [
    {
      "label": "Home",
      "href": "/"
    },
    {
      "label": "About",
      "href": "/sobre"
    },
    {
      "label": "Projects",
      "href": "/projetos"
    },
    {
      "label": "Contact",
      "href": "/contato"
    }
  ]
};

const linkTreeData = {
  "linkTree": [
    {
      "href": "https://www.upwork.com/freelancers/~0185fd1a5d8d3d43d4?mp_source=share",
      "label": "Upwork",
      "icon": "FaUpwork"
    }
  ]
};

// Configurações de negócio
export const getBusinessSettings = () => {
  // Verifica se está no cliente
  if (typeof window !== 'undefined') {
    // Pega o idioma do localStorage ou usa o padrão
    const language = localStorage.getItem('language') || 'pt';
    return language === 'pt' ? businessSettingsPT : businessSettingsEN;
  }
  // No servidor, retorna o padrão em português
  return businessSettingsPT;
};

// Configurações gerais
export const getGeneralSettings = () => {
  return generalSettings;
};

// Configurações de tema
export const getThemeSettings = () => {
  return themeSettings;
};

// Logos
export const getLogos = () => {
  return logos;
};

// Menu principal
export const getMainMenu = () => {
  return mainMenu;
};

// LinkTree
export const getLinkTreeData = () => {
  return linkTreeData;
};

// Configurações de integração (placeholder)
export const getIntegrations = () => {
  return {};
};

// Informações de versão (placeholder)
export const getVersionInfo = () => {
  return {
    version: "1.0.0",
    nextVersion: "13.5.7",
    message: "Portfolio pessoal - Lucas Banheti"
  };
};
