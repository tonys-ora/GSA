export interface AddressType{
  address: string,
  detail: string,
  phone: string,
  checked?: boolean
}

export interface MethodType {
  url?: string,
  method: string,
  price: number,
  checked?: boolean
}

export interface PaymentAccountType {
  title: string,
  isInput: boolean,
  checked?: boolean
}