import { NavigationContainer } from '@react-navigation/native';

import { AppRoute } from '@routes/app.routes';
import { AuthRoutes } from '@routes/auth.routes';

import { useAuth } from '@hooks/useAuth';

import { Loading } from '@components/Loading';

export function Routes() {
const { token, isLoadingTokenStorageData } = useAuth()

if(isLoadingTokenStorageData) {
  return <Loading />
}

  return(
    <NavigationContainer>
      {token ? <AppRoute /> : <AuthRoutes />}
    </NavigationContainer>
  )
}