import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ServiceLevelType, SubmissionState } from '@/types/Submission'
import { ItemType } from '@/types/Submission/GradingType'

const initialState: SubmissionState = {
  currentStep: 0,
  itemType: null,
  cardAmount : null,
  totalValue : null,
  gradingService: null,
  gradingFee: null,
  shippingAddress: null,
  shippingMethod: null,
  shippingPaymentAccount: null,
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
    updateItemType(state, action: PayloadAction<{itemType : ItemType}>) {
      state.itemType = action.payload.itemType
    },
    updateService(state, action: PayloadAction<{serviceLevel: ServiceLevelType, gradingFee: number}>) {
      state.gradingService = action.payload.serviceLevel
      state.gradingFee = action.payload.gradingFee
    },
    updateShippingAddress(state, action: PayloadAction<{ address: string }>) {
      state.shippingAddress = action.payload.address
    },
    updateShippingMethod(state, action: PayloadAction<{ method: string }>) {
      state.shippingMethod = action.payload.method
    },
    updateShippingPaymentAccount(state, action: PayloadAction<{ paymentAccount: string }>) {
      state.shippingPaymentAccount = action.payload.paymentAccount
    },
    clear(state) {
      state = {...state, ...initialState }
    }
  }
})

export default submissionSlice.reducer

export const { 
  goNextStep, 
  goPrevStep, 
  updateItemType, 
  updateService, 
  updateShippingAddress, 
  updateShippingMethod, 
  updateShippingPaymentAccount,
  clear 
} = submissionSlice.actions
