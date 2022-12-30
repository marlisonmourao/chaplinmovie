import { useEffect } from 'react'
import { ScrollView } from "react-native";
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

import { InputSignin } from '@components/InputsSignin';

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

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signinSchema)
  });


  function handleSignin({ email, password }: FormDataProps) {
    signIn(email, password);
  }

  useEffect(() => {
    getToken()
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

          <ButtonSignin onPress={handleSubmit(handleSignin)}>
            <TextButton>Acessar</TextButton>
          </ButtonSignin>
        </ContainerForm>
      </Container>
    </ScrollView>
  );
}
