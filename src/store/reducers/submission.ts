import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SubmissionState } from '@/types/Submission'

const initialState: SubmissionState = {
  currentStep: 0,
  itemType: {value: null, show: false},
  CardAmount : {value: null, show: false},
  TotalValue : {value: null, show: false}
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
    updateItemType(state, action: PayloadAction<{itemType : SubmissionState['itemType']['value']}>) {
      state.itemType.value = action.payload.itemType
    },
    clear(state) {
      state = {...state, ...initialState }
    }
  }
})

export default submissionSlice.reducer

export const {goNextStep, goPrevStep, updateItemType, clear } = submissionSlice.actions
