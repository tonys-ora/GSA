import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ServiceLevelType, SubmissionState } from '@/types/Submission'
import { ItemType } from '@/types/Submission/GradingType'

const initialState: SubmissionState = {
  currentStep: 0,
  itemType: undefined,
  cardAmount: undefined,
  totalValue: undefined,
  gradingService: undefined,
  gradingFee: undefined,
  shippingAddress: undefined,
  shippingMethod: undefined,
  shippingPaymentAccount: undefined,
  shippingCost: undefined,
  showDiv1: false,
  showDiv2: false
}

const submissionSlice = createSlice({
  name: 'submission',
  initialState,
  reducers: {
    goNextStep(state) {
      state.currentStep += 1
    },
    goPrevStep(state) {
      state.currentStep -= 1
    },
    updateItemType(state, action: PayloadAction<{ itemType: ItemType }>) {
      state.itemType = action.payload.itemType
    },
    updateItems(state, action: PayloadAction<{ cardAmount: number; totalValue: number }>) {
      state.cardAmount = action.payload.cardAmount
      state.totalValue = action.payload.totalValue
    },
    updateService(state, action: PayloadAction<{ serviceLevel: ServiceLevelType; gradingFee: number }>) {
      state.gradingService = action.payload.serviceLevel
      state.gradingFee = action.payload.gradingFee
    },
    updateShippingAddress(state, action: PayloadAction<{ address: string }>) {
      state.showDiv1 = true
      state.shippingAddress = action.payload.address
    },
    updateShippingMethod(state, action: PayloadAction<{ method: string; price: number }>) {
      state.showDiv1 = true
      state.shippingMethod = action.payload.method
      state.shippingCost = action.payload.price
    },
    updateShippingPaymentAccount(state, action: PayloadAction<{ paymentAccount: string }>) {
      state.showDiv1 = true
      state.shippingPaymentAccount = action.payload.paymentAccount
    },
    showSummary(state) {
      state.showDiv2 = true
    },
    clear(state) {
      state.currentStep = 0
      state.itemType = undefined
      state.cardAmount = undefined
      state.totalValue = undefined
      state.gradingService = undefined
      state.gradingFee = undefined
      state.shippingAddress = undefined
      state.shippingMethod = undefined
      state.shippingPaymentAccount = undefined
      state.shippingCost = undefined
      state.showDiv1 = false
      state.showDiv2 = false
    }
  }
})

export default submissionSlice.reducer

export const {
  goNextStep,
  goPrevStep,
  updateItemType,
  updateItems,
  updateService,
  updateShippingAddress,
  updateShippingMethod,
  updateShippingPaymentAccount,
  showSummary,
  clear
} = submissionSlice.actions
