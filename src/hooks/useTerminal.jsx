import { useEffect, useState } from 'react'

export const TERMINAL = {
  PHONE: 'PHONE',
  PC: 'PC'
}

const useTerminal = () => {
  const mediaQuery = window.matchMedia('(max-width: 750px)')
  const [terminal, setTerminal] = useState()

  useEffect(() => {
    const updateTerminal = e => {
      if (e.matches) {
        setTerminal(TERMINAL.PHONE)
      } else {
        setTerminal(TERMINAL.PC)
      }
    }
    updateTerminal(mediaQuery)
    mediaQuery.addListener(updateTerminal)
    return () => mediaQuery.removeListener(updateTerminal)
  }, [])

  return terminal
}

export default useTerminal
