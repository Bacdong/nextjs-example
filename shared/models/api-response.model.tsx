export interface ApiResponse<T> {
  success: boolean
  error_code: number
  error_message: string
  data: T
}