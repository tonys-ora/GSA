import { ItemType } from "./GradingType";

export interface SubmissionState {
  currentStep: number,
  itemType: {value: ItemType | null, show: boolean},
  CardAmount : {value: number | null, show: boolean},
  TotalValue : {value: number | null, show: boolean},
}