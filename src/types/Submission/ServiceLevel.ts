export type ServiceLevelType = 'Economy' | 'Standard' | 'Express'

export interface ServiceType {
  level: ServiceLevelType
  content: string
  minCards: number
  turnaround: {
    min: number
    max: number
  }
  price: number
  checked?: boolean
}
