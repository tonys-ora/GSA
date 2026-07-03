import { useSelector } from '@/store'

export function useCurrentStep() {
  const { currentStep } = useSelector(store => store.submission)

  return currentStep
}
