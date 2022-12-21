import { NavigationContainer } from '@react-navigation/native';

import { AppRoute } from '@routes/app.routes';
import { AuthRoutes } from '@routes/auth.routes';
import { useAuth } from '@hooks/useAuth';

export function Routes() {
const { user } = useAuth()

  console.log("USUÁRIO LOGADO =>", user)

  return(
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}