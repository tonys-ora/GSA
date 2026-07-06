import { ItemType } from './GradingType'
import { ServiceLevelType } from './ServiceLevel'

export interface SubmissionState {
  currentStep: number
  itemType: ItemType | undefined
  cardAmount: number | undefined
  totalValue: number | undefined
  gradingService: ServiceLevelType | undefined
  gradingFee: number | undefined
  shippingAddress: string | undefined
  shippingMethod: string | undefined
  shippingPaymentAccount: string | undefined
  shippingCost: number | undefined
  showDiv1: boolean
  showDiv2: boolean
}

export * from './GradingType'
export * from './ServiceLevel'
export * from './Shipping'
