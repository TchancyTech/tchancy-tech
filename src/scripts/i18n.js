// Language switching functionality
window.setupLanguageSwitcher = function(translations) {
  const currentLang = localStorage.getItem('language') || 'en';

  const desktopSelect = document.getElementById('lang-select-desktop');
  const mobileSelect = document.getElementById('lang-select-mobile');

  const selectElements = [desktopSelect, mobileSelect].filter(Boolean);

  selectElements.forEach((select) => {
    select.addEventListener('change', (event) => {
      const selectedLang = event.target.value;
      setLanguage(selectedLang, translations);
      localStorage.setItem('language', selectedLang);
      syncLanguageSelects(selectedLang, selectElements);
    });
  });

  syncLanguageSelects(currentLang, selectElements);
  setLanguage(currentLang, translations);
};

function setLanguage(lang, translations) {
  const t = translations[lang];
  if (!t) return;
  
  // Update navbar
  updateContentByClass('lang-nav-home', t.nav.home);
  updateContentByClass('lang-nav-services', t.nav.services);
  updateContentByClass('lang-nav-portfolio', t.nav.portfolio);
  updateContentByClass('lang-nav-about', t.nav.about);
  updateContentByClass('lang-nav-faq', t.nav.faq);
  updateContentByClass('lang-nav-contact', t.nav.contact);
  
  // Update all text content
  updateContentByClass('lang-hero-title', t.hero.title);
  updateContentByClass('lang-hero-title-accent', t.hero.titleAccent);
  updateContentByClass('lang-hero-subtitle', t.hero.subtitle);
  updateContentByClass('lang-hero-cta1', t.hero.ctaPrimary);
  updateContentByClass('lang-hero-cta2', t.hero.ctaSecondary);
  
  updateContentByClass('lang-services-title', t.services.title);
  updateContentByClass('lang-services-subtitle', t.services.subtitle);
  updateContentByClass('lang-service-web-title', t.services.webDev.title);
  updateContentByClass('lang-service-web-desc', t.services.webDev.description);
  updateContentByClass('lang-service-mobile-title', t.services.mobileApps.title);
  updateContentByClass('lang-service-mobile-desc', t.services.mobileApps.description);
  updateContentByClass('lang-service-enterprise-title', t.services.enterprise.title);
  updateContentByClass('lang-service-enterprise-desc', t.services.enterprise.description);
  updateContentByClass('lang-service-security-title', t.services.security.title);
  updateContentByClass('lang-service-security-desc', t.services.security.description);
  updateContentByClass('lang-services-viewall', t.services.viewAll);

  updateContentByClass('lang-portfolio-title', t.portfolio.title);
  updateContentByClass('lang-portfolio-subtitle', t.portfolio.subtitle);
  updateContentByClass('lang-portfolio-item1-category', t.portfolio.project1.category);
  updateContentByClass('lang-portfolio-item1-title', t.portfolio.project1.title);
  updateContentByClass('lang-portfolio-item1-description', t.portfolio.project1.description);
  updateContentByClass('lang-portfolio-item2-category', t.portfolio.project2.category);
  updateContentByClass('lang-portfolio-item2-title', t.portfolio.project2.title);
  updateContentByClass('lang-portfolio-item2-description', t.portfolio.project2.description);
  updateContentByClass('lang-portfolio-item3-category', t.portfolio.project3.category);
  updateContentByClass('lang-portfolio-item3-title', t.portfolio.project3.title);
  updateContentByClass('lang-portfolio-item3-description', t.portfolio.project3.description);

  updateContentByClass('lang-about-title', t.about.title);
  updateContentByClass('lang-about-subtitle', t.about.subtitle);
  updateContentByClass('lang-about-point1-title', t.about.point1.title);
  updateContentByClass('lang-about-point1-description', t.about.point1.description);
  updateContentByClass('lang-about-point2-title', t.about.point2.title);
  updateContentByClass('lang-about-point2-description', t.about.point2.description);
  updateContentByClass('lang-about-point3-title', t.about.point3.title);
  updateContentByClass('lang-about-point3-description', t.about.point3.description);

  updateContentByClass('lang-credibility-title', t.credibility.title);
  updateContentByClass('lang-credibility-subtitle', t.credibility.subtitle);
  updateContentByClass('lang-credibility-metric1-value', t.credibility.metric1.value);
  updateContentByClass('lang-credibility-metric1-label', t.credibility.metric1.label);
  updateContentByClass('lang-credibility-metric2-value', t.credibility.metric2.value);
  updateContentByClass('lang-credibility-metric2-label', t.credibility.metric2.label);
  updateContentByClass('lang-credibility-metric3-value', t.credibility.metric3.value);
  updateContentByClass('lang-credibility-metric3-label', t.credibility.metric3.label);
  updateContentByClass('lang-credibility-process-title', t.credibility.process.title);
  updateContentByClass('lang-credibility-step1-title', t.credibility.process.step1.title);
  updateContentByClass('lang-credibility-step1-description', t.credibility.process.step1.description);
  updateContentByClass('lang-credibility-step2-title', t.credibility.process.step2.title);
  updateContentByClass('lang-credibility-step2-description', t.credibility.process.step2.description);
  updateContentByClass('lang-credibility-step3-title', t.credibility.process.step3.title);
  updateContentByClass('lang-credibility-step3-description', t.credibility.process.step3.description);

  updateContentByClass('lang-contact-title', t.contact.title);
  updateContentByClass('lang-contact-subtitle', t.contact.subtitle);
  updateContentByClass('lang-contact-email-label', t.contact.emailLabel);
  updateContentByClass('lang-contact-whatsapp-label', t.contact.whatsappLabel);
  updateContentByClass('lang-contact-phone-label', t.contact.phoneLabel);
  updateContentByClass('lang-contact-location-label', t.contact.locationLabel);
  updateContentByClass('lang-contact-location-value', t.contact.locationValue);
  updateContentByClass('lang-contact-response-label', t.contact.responseLabel);
  updateContentByClass('lang-contact-response-value', t.contact.responseValue);
  updateContentByClass('lang-contact-card-title', t.contact.cardTitle);
  updateContentByClass('lang-contact-card-description', t.contact.cardDescription);
  updateContentByClass('lang-contact-button', t.contact.button);

  updateContentByClass('lang-faq-title', t.faq.title);
  updateContentByClass('lang-faq-subtitle', t.faq.subtitle);
  updateContentByClass('lang-faq-q1', t.faq.question1);
  updateContentByClass('lang-faq-a1', t.faq.answer1);
  updateContentByClass('lang-faq-q2', t.faq.question2);
  updateContentByClass('lang-faq-a2', t.faq.answer2);
  updateContentByClass('lang-faq-q3', t.faq.question3);
  updateContentByClass('lang-faq-a3', t.faq.answer3);
  
  updateContentByClass('lang-cta-title', t.cta.title);
  updateContentByClass('lang-cta-subtitle', t.cta.subtitle);
  updateContentByClass('lang-cta-button', t.cta.button);
  
  updateContentByClass('lang-footer-rights', t.footer.rights);
  updateContentByClass('lang-footer-tagline', t.footer.tagline);
  updateContentByClass('lang-footer-quicklinks', t.footer.quickLinks);
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

function syncLanguageSelects(lang, selectElements) {
  selectElements.forEach((select) => {
    if (select && select.value !== lang) {
      select.value = lang;
    }
  });
}

function updateContentByClass(className, content) {
  const elements = document.querySelectorAll('.' + className);
  elements.forEach(el => {
    el.textContent = content;
  });
}
