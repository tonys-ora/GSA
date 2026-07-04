import GardingType from '@/pages/Submission/Steps/GardingType'
import AddItems from '@/pages/Submission/Steps/AddItems'
import ServiceLevel from '@/pages/Submission/Steps/ServiceLevel'
import Shipping from '@/pages/Submission/Steps/Shipping'
import Billing from '@/pages/Submission/Steps/Billing'
import Confirmation from '@/pages/Submission/Steps/Confirmation'

import card1 from '@/assets/images/card1.png'
import card2 from '@/assets/images/card2.png'
import image1 from '@/assets/images/image 1782.png'
import image2 from '@/assets/images/image 1783.png'

import { AddressType, ServiceType, RadioItemType, MethodType, PaymentAccountType } from '@/types/Submission'

export const Submissions = [
  <GardingType />, 
  <AddItems />, 
  <ServiceLevel />, 
  <Shipping />,
  <Billing />,
  <Confirmation />
]

export const submissionStatusBoards = [
  {
    title: 'Recent',
    content: 'Submissions that you recently completed',
    imageUrl: card1,
    alt: 'You have no recent submissions'
  },
  {
    title: 'In Progress',
    content: 'Submissions that are incomplete',
    imageUrl: card2,
    alt: 'You have no in-progress submissions'
  }
]

export const steps = [
  {
    id: 0,
    title: 'Item Type'
  },
  {
    id: 1,
    title: 'Add Items'
  },
  {
    id: 2,
    title: 'Service Level'
  },
  {
    id: 3,
    title: 'Shipping'
  },
  {
    id: 4,
    title: 'Billing'
  },
  {
    id: 5,
    title: 'Confirmation'
  },
];

export const itemTypes: RadioItemType[] = [
  {
    icon: 'award4',
    title: 'Standard Card Grading',
    content: 'Standard size, memorabilia & Tallboy cards'
  },
  {
    icon: 'award4',
    title: 'Topps Chrome Special',
    content: 'Pricing for standard size raw card grading, crossover & reviews'
  },
  {
    icon: 'award4',
    title: 'TCG Grading',
    content: 'A grading business specializing in Pokemon and sports cards.'
  },
  {
    icon: 'award4',
    title: 'Comic book  & magazine',
    content: 'Tailored grading for comics and magazines'
  }
]

export const serviceTableHeader = [
  {
    title: 'Service Level',
    width: '100%'
  },
  {
    title: 'Min cards/sub',
    width: '100px'
  },
  {
    title: 'Turnaround',
    width: '100px'
  },
  {
    title: 'Price',
    width: '60px'
  },
]

export const Services: ServiceType[] = [
  {
    level: 'Economy',
    content: 'Ideal for  Casual collectors or large sets who prefer low-cost grading options.',
    minCards: 25,
    turnaround: {
      min: 30,
      max: 30
    },
    price: 5
  },
  {
    level: 'Standard',
    content: 'Ideal for Bulk submitters and collectors who want reliable grading at an affordable price.',
    minCards: 10,
    turnaround: {
      min: 5,
      max: 10
    },
    price: 10
  },
  {
    level: 'Express',
    content: 'Ideal for High-value cards, time-sensitive grading, or those who want quick results.',
    minCards: -1,
    turnaround: {
      min: 1,
      max: 1
    },
    price: 39.99
  }
]

export const shippingAddresses: AddressType[] = [
  {
    address: 'Boiulevard Street 273, CA',
    detail: 'California, California, 093823, United States',
    phone: '+1 0921 3812'
  },
  {
    address: 'Street geroge 23T',
    detail: 'California, Sacramentto, 093823, United States',
    phone: '+1 0921 3812'
  },
  
]
export const shippingMethods: MethodType[] = [
  {
    url: image1,
    method: 'USPS Priority Mail (oversized)',
    price: 19.99
  },
  {
    url: image2,
    method: 'Fedex Ground (oversized)',
    price: 30
  },
]
export const shippingPaymentAccounts: PaymentAccountType[] = [
  {
    title: 'SGC Shipping & Handling',
    isInput: false,
  },
  {
    title: 'Fedex Ground (oversized)',
    isInput: true,
  },
  
]


export const SummaryConst = {
  currentStep: {
    title: 'Grading type',
    prefix: ''
  },
  cardAmount : {
    title: 'Card amount',
    prefix: ''
  },
  totalValue : {
    title: 'Total decl. value',
    prefix: '$'
  },
  gradingService: {
    title: 'Grading service level',
    prefix: ''
  },
  gradingFee: {
    title: 'Grading fee',
    prefix: '$'
  },
  showDiv1: {
    title: '',
    prefix: ''
  },
  shippingAddress: {
    title: 'Address',
    prefix: ''
  },
  shippingMethod: {
    title: 'Method',
    prefix: ''
  },
  shippingPaymentAccount: {
    title: 'Payment account',
    prefix: ''
  },
  showDiv2: {
    title: '',
    prefix: ''
  }
}