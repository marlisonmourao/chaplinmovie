import { NavigationContainer } from '@react-navigation/native';

import { AppRoute } from '@routes/app.routes';
import { AuthRoutes } from '@routes/auth.routes';

import { useAuth } from '@hooks/useAuth';

import { Loading } from '@components/Loading';

export function Routes() {
const { session_id, isLoadingTokenStorageData } = useAuth()
console.log("SESSIONID", session_id)

if(isLoadingTokenStorageData) {
  return <Loading />
}

  return(
    <NavigationContainer>
      {session_id ? <AppRoute /> : <AuthRoutes />}
    </NavigationContainer>
  )
}