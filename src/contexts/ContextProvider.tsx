'use client'
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type ContextType = {
  showAside: boolean
  setShowAside: Dispatch<SetStateAction<boolean>>
  coworkingTime: number
  setCoworkingTime: Dispatch<SetStateAction<number>>
  technologyTime: number
  setTechnologyTime: Dispatch<SetStateAction<number>>
  handleShowAside: () => void
}

export const Context = createContext({} as ContextType)

interface ProviderProps {
  children: ReactNode
}

export default function Provider(props: ProviderProps) {
  const [showAside, setShowAside] = useState(false)
  const [coworkingTime, setCoworkingTime] = useState(0)
  const [technologyTime, setTechnologyTime] = useState(0)

  function handleShowAside() {
    setShowAside(!showAside)
  }

  return (
    <Context.Provider
      value={{
        showAside,
        setShowAside,
        coworkingTime,
        setCoworkingTime,
        technologyTime,
        setTechnologyTime,
        handleShowAside,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export const useContextAside = () => useContext(Context)
