import React, { useContext, useEffect, useRef } from 'react'
import {
  Navigate,
  RouteProps,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { ACCESS_TOKEN } from 'src/constants'
import { AuthContext } from 'src/providers/auth.provider'
// import { AuthContext } from 'src/features/auth'

/**
 * @description querystring에 token이 없으면 로그인 페이지로 이동
 */
export default function ProtectedRoute({ element, ...rest }: RouteProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { setIsLoggedIn } = useContext(AuthContext)

  const navigateLogin = () => {
    window.sessionStorage.setItem(
      'beforeLogin',
      location.pathname + location.search,
    )
    window.open('/sign/login', '_self')
  }

  const validation = (token: Nullable<string>) => {
    if (token) {
      window.sessionStorage.setItem(ACCESS_TOKEN, token)
      navigate(location.pathname)
      setIsLoggedIn(true)
    } else {
      // navigateLogin()
      // @remove
      navigate('/glosub/not-found')
    }
  }

  const getToken = () =>
    searchParams.get('token') || window.sessionStorage.getItem(ACCESS_TOKEN)

  useEffect(() => {
    // @todo 세션에 토큰이 존재하는 경우도 확인 해야함 (새로고침하는 경우)
    //       AUTH_PROVIDER 에서는 확인 필요
    validation(getToken())
  }, [])

  // if (!isLoggedIn) <React.Fragment></React.Fragment>
  return <React.Fragment>{element}</React.Fragment>
}
