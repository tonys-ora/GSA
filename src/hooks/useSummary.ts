import { useSelector } from '@/store'
import { SubmissionState } from '@/types/Submission'

export function useSummary() : SubmissionState {
  const summary = useSelector(store => store.submission)

  return summary
}
