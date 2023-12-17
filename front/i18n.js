import {getRequestConfig} from 'next-intl/server'

export  default getRequestConfig(async ({locale}) => ({
	               strings: (await import(`./strings/${locale}.json`)).default}))
