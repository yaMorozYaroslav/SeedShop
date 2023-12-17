//const { i18n } = require('./next-i18next.config')

//~ module.exports = {
  //~ experimental: {
    //~ serverActions: true
  //~ },
  //~ compiler: {
    //~ styledComponents: true
  //~ },
  //~ i18n: {
      //~ locales: ["en", "ua"],
      //~ //  default locale used when the non-locale paths are visited
      //~ defaultLocale: "ua",
    //~ },
//~ }
nextConfig = {
  experimental: {
    serverActions: true
  },
  compiler: {
    styledComponents: true
  },
  //~ i18n: {
      //~ locales: ["en", "ua"],
      //~ //  default locale used when the non-locale paths are visited
      //~ defaultLocale: "ua",
    //~ },
}

module.exports = nextConfig
