export interface Language {
  code: string
  value: string
  label: string
}

export interface TableHeader {
  id: string
  text: string
  align?: 'right' | 'left' | 'center'
}
