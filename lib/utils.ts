import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Axios from "axios"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const API_BASE_URL = "https://jsonplaceholder.typicode.com"

export const fetchAPI = async <T>(endpoint: string): Promise<T> => {
  const res = await Axios.get(`${API_BASE_URL}${endpoint}`)

  if (!res.data) throw new Error(`Error en la petición: ${res.statusText}`)

  return res.data
}
