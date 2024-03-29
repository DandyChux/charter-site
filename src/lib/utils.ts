import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { env } from '~/env.mjs'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getImages() {
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/images`)

  if (!res.ok) {
      throw new Error('Failed to fetch images')
  }

  return res.json()
}