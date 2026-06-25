// hooks/useFullscreen.ts
import { RefObject, useCallback, useEffect, useRef, useState } from 'react'

interface UseFullscreenOptions {
  onEnter?: () => void
  onExit?: () => void
  onError?: (error: Error) => void
}

interface UseFullscreenReturn {
  isFullscreen: boolean
  toggleFullscreen: () => Promise<void>
  enterFullscreen: () => Promise<void>
  exitFullscreen: () => Promise<void>
  elementRef: RefObject<HTMLDivElement>
}

export const useFullscreen = (options?: UseFullscreenOptions): UseFullscreenReturn => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const elementRef = useRef<HTMLDivElement>(null)

  const enterFullscreen = useCallback(async () => {
    if (!elementRef.current) return

    try {
      if (elementRef.current.requestFullscreen) {
        await elementRef.current.requestFullscreen()
      } else if ((elementRef.current as any).webkitRequestFullscreen) {
        // Safari
        await (elementRef.current as any).webkitRequestFullscreen()
      } else if ((elementRef.current as any).mozRequestFullScreen) {
        // Firefox
        await (elementRef.current as any).mozRequestFullScreen()
      } else if ((elementRef.current as any).msRequestFullscreen) {
        // IE/Edge
        await (elementRef.current as any).msRequestFullscreen()
      }
      options?.onEnter?.()
    } catch (error) {
      console.error('Error entering fullscreen:', error)
      options?.onError?.(error as Error)
    }
  }, [options])

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
      } else if ((document as any).webkitExitFullscreen) {
        // Safari
        await (document as any).webkitExitFullscreen()
      } else if ((document as any).mozCancelFullScreen) {
        // Firefox
        await (document as any).mozCancelFullScreen()
      } else if ((document as any).msExitFullscreen) {
        // IE/Edge
        await (document as any).msExitFullscreen()
      }
      options?.onExit?.()
    } catch (error) {
      console.error('Error exiting fullscreen:', error)
      options?.onError?.(error as Error)
    }
  }, [options])

  const toggleFullscreen = useCallback(async () => {
    const fullscreenElement =
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement

    if (!fullscreenElement) {
      await enterFullscreen()
    } else {
      await exitFullscreen()
    }
  }, [enterFullscreen, exitFullscreen])

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement =
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement

      setIsFullscreen(!!fullscreenElement)
    }

    // Add event listeners for different browsers
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [])

  return {
    isFullscreen,
    toggleFullscreen,
    enterFullscreen,
    exitFullscreen,
    elementRef
  }
}
