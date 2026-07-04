import { ItemType } from "./GradingType";
import { ServiceLevelType } from "./ServiceLevel";

export interface SubmissionState {
  currentStep: number,
  itemType: ItemType | null, 
  cardAmount :  number | null, 
  totalValue :  number | null, 
  gradingService: ServiceLevelType | null, 
  gradingFee: number | null, 
  showDiv1: boolean,
  shippingAddress: string | null,
  shippingMethod: string | null,
  shippingPaymentAccount: string | null,
  showDiv2: boolean
}


export * from './GradingType'
export * from './ServiceLevel'
export * from './Shipping'