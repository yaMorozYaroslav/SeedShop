'use server'
import { revalidateTag } from 'next/cache'

export async function revalidator() { 
    return revalidateTag('items', 'seeds')
}
