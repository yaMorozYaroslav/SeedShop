import createMiddleware from 'next-intl/middleware'

//~ export const config = {
             //~ matcher: ['/((?!api|_next|.*\\..*).*)']
//~ }
export default createMiddleware({
  locales: ['en', 'ua'],
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ua|en)/:path*']
   //~ matcher: ['/((?!api|_next|.*\\..*).*)']
};
