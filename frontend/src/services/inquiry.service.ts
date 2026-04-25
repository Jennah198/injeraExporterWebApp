import { apiRequest } from './api'

export function createInquiry(data: any) {
  return apiRequest('/inquiries', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
