//const { i18n } = require('./next-i18next.config')

//~ module.exports = {

const nextConfig = {
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
const withNextIntl = require('next-intl/plugin')('./i18n.js')
module.exports = withNextIntl(nextConfig)
