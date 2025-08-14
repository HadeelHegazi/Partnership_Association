// Logo configuration for different languages
export const logoConfig = {
  he: {
    src: "/images/logo.png",
    alt: "Partnership Association Logo - Hebrew",
    fallback: "/src/images/logo.png"
  },
  ar: {
    src: "/images/logo.png",
    alt: "Partnership Association Logo - Arabic",
    fallback: "/images/logo.png"
  },
  en: {
    src: "/images/logo.png",
    alt: "Partnership Association Logo - English",
    fallback: "/images/logo.png"
  }
};

// Logo dimensions and styling
export const logoStyles = {
  container: "h-24 md:h-32 lg:h-40 w-auto flex items-center",
  image: "h-full w-auto object-contain",
  fallbackText: "text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 hidden"
};

// Footer logo configuration
export const footerLogoConfig = {
  src: "/images/logo.png",
  alt: "Partnership Association Logo",
  fallbackText: "🤝 Partnership Association"
};

// Footer logo styles
export const footerLogoStyles = {
  container: "h-24 md:h-32 w-auto flex items-center",
  image: "h-full w-auto object-contain",
  fallbackText: "text-2xl md:text-3xl font-bold text-white hidden"
};

// Get logo config for a specific language
export const getLogoConfig = (language: string) => {
  return logoConfig[language as keyof typeof logoConfig] || logoConfig.en;
};
