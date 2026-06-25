import { Email, User } from './user'

export interface AuthState {
  isLoggedIn: boolean
  chatRoomOpen: boolean
  user: User | null
  token: string | null
}

export interface LoginUserRes {
  user: User
  token: string
  requires2fa?: boolean
}

export interface ResetPasswordRequest {
  token: string
  password: string
}

export interface Success {
  success: boolean
}

export interface VerifyCodeRequest extends Email {
  code: string
}

export interface UserForm {
  email: string
  username: string
  password: string
  confirmPassword: string
}
