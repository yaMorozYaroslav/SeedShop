import createMiddleware from 'next-intl/middleware'
import {locales, localePrefix} from './navigation';
 
//~ export const config = {
             //~ matcher: ['/((?!api|_next|.*\\..*).*)']
//~ }
export default createMiddleware({
  //~ locales: ['en', 'ua'],
  defaultLocale: 'en',
  localePrefix,
  locales
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ua|en)/:path*']
   //~ matcher: ['/((?!api|_next|.*\\..*).*)']
};
