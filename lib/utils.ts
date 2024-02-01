import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string, locale = 'de-DE') {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale);
}
