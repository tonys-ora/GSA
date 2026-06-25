import Entity from './entity'

export interface Email {
  email: string
}

export interface EmailUserName extends Email {
  username: string
}

export interface EmailPassword extends Email {
  password: string
}

export interface User extends Entity {
  email: string
  username: string
  uid: string
  firstName: string
  lastName: string
  avatar: File | string
  anonymous: boolean
  qrCodeUrl?: string
}

export type UserSummary = Pick<User, 'email' | 'username' | 'avatar'>
