
import { useEffect, useState } from 'react'
import { ScrollView } from "react-native";
import { useToast } from 'native-base';
import { useTheme } from 'styled-components';
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ButtonSignin,
  Container,
  TextButton,
  ContainerForm,
  Heading,
  Logo,
} from "./styles";

import logoSignin from "@assets/Logo.png";

import { useAuth } from "@hooks/useAuth"
import { AppError } from '@utils/AppError';

import { InputSignin } from '@components/InputsSignin';
import { Loading } from '@components/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FormDataProps = {
  email: string;
  password: string;
}

const signinSchema = yup.object({
  email: yup.string().required('Informe o usuário'),
  password: yup.string().required('Informe a senha'),
})

export function SignIn() {
  const { signIn, getToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signinSchema)
  });

  const toast = useToast();
  const theme = useTheme();
  
  async function handleSignin({ email, password }: FormDataProps) {
    try {
      setIsLoading(true)
      await signIn(email, password);
    }
    catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message 
      : 'Não foi possível efetuar o login. Tente novamente mais tarde.';

      toast.show({
        title,
        placement: 'top',
        bgColor: theme.colors.attention_light
      })

      setIsLoading(false)
    }
  }

  useEffect(() => {
    getToken()
    // AsyncStorage.clear()
  }, [])

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Container>
        <Logo source={logoSignin} />

        <Heading>Acesse sua conta</Heading>

        <ContainerForm>
          <Controller 
            control={control}
            name="email"
            render={({ field: {onChange, value} }) => (
              <InputSignin 
                placeholder="E-mail" 
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors.email && errors.email?.message}
              />
            )}
          />

          <Controller 
            control={control}
            name="password"
            render={({ field: {onChange, value} }) => (
              <InputSignin 
                placeholder="Senha" 
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignin)}
                returnKeyType="send"
                error={errors.password && errors.password?.message}
              />
            )}
          />

          <ButtonSignin disabled={isLoading} onPress={handleSubmit(handleSignin)}>
            {
              isLoading ? <Loading /> : <TextButton>Acessar</TextButton>
            }
          </ButtonSignin>
        </ContainerForm>
      </Container>
    </ScrollView>
  );
}
