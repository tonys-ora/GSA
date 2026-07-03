import { IconType } from "@/components/Core/AppIcon"

export type ItemType = 'Standard Card Grading' | 'Topps Chrome Special' | 'TCG Grading' | 'Comic book  & magazine'

export interface RadioItemType {
  icon: IconType,
  title: ItemType,
  content: string,
  checked?: boolean
}

