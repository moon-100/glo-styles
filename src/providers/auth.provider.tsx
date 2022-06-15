import { createContext, ReactNode, useEffect, useState } from 'react'
import { setHeaderToken } from 'src/app/axios-client'
import { useAppDispatch } from 'src/app/hooks'
import { useRefreshAccessTokenQuery } from 'src/features/auth/auth.service'

const INTERVAL_OPTIONS = {
  OFF: 0,
  TEN_MINUTES: 10 * 60 * 1000,
  HOUR: 3600000,
  DAY: 86400000,
}

interface Props {
  children: ReactNode
}

type AuthContextType = {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  setPollingInterval: React.Dispatch<React.SetStateAction<number>>
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: null,
  setIsLoggedIn: null,
  setPollingInterval: null,
})

export default function AuthProvider(props: Props) {
  const [pollingInterval, setPollingInterval] = useState(
    INTERVAL_OPTIONS.TEN_MINUTES,
  )
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const { data, isLoading } = useRefreshAccessTokenQuery(null, {
  //   pollingInterval,
  // })

  useEffect(() => {
    console.log('[AUTH_PROVICER] isLoggedIn=', isLoggedIn)
  }, [isLoggedIn])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        setPollingInterval,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
