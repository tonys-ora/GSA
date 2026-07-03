import card1 from '@/assets/images/card1.png'
import card2 from '@/assets/images/card2.png'
import { RadioItemType } from '@/types/Submission/GradingType'

import GardingType from '@/pages/Submission/Steps/GardingType'
import AddItems from '@/pages/Submission/Steps/AddItems'
import ServiceLevel from '@/pages/Submission/Steps/ServiceLevel'
import Shipping from '@/pages/Submission/Steps/Shipping'
import Billing from '@/pages/Submission/Steps/Billing'
import Confirmation from '@/pages/Submission/Steps/Confirmation'

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
    width: 'auto'
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