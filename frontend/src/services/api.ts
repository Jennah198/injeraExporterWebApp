const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function apiRequest(path: string, options?: RequestInit) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) throw new Error('API Error')

  return res.json()
}
