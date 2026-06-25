import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AuthState } from '@/types'

const initialState: AuthState = {
  isLoggedIn: false,
  chatRoomOpen: false,
  user: null,
  token: null,
  balance: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: AuthState['user']; token: string }>) {
      state.isLoggedIn = true
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout(state) {
      state.isLoggedIn = false
      state.chatRoomOpen = false
      state.user = null
      state.token = null
    },
    updateUser(state, action: PayloadAction<Partial<AuthState['user']>>) {
      if (state.isLoggedIn && state.user) {
        state.user = { ...state.user, ...action.payload }
      }
    },
    updateBalance(state, action: PayloadAction<AuthState['balance']>) {
      if (state.isLoggedIn) {
        if (state.user) {
          state.user.balances = {
            ...state.user?.balances,
            [state.user?.activeCurrency || '']: action.payload?.balance || 0
          }
        }
        state.balance = action.payload
      }
    },
    setChatRoom(state, action) {
      state.chatRoomOpen = action.payload
    }
  }
})

export default authSlice.reducer

export const { login, logout, updateUser, updateBalance, setChatRoom } = authSlice.actions
