import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { env } from '~/env.mjs'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getImages() {
  const res = await fetch("https://charter-site.vercel.app/api/images")

  if (!res.ok) {
      throw new Error('Failed to fetch images')
  }

  return res.json()
}