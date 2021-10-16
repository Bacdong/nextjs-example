import { Author } from './author.model'

export interface Article {
  id: number
  title: string
  brief: string
  author: Author
  content: string
  avatar: string
  available_on: string
}