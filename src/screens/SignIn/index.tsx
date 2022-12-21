import {
  ButtonSignin,
  Container,
  Inputs,
  TextButton,
  ContainerForm,
  Heading,
  Logo,
} from "./styles";

import logoSignin from "@assets/Logo.png";

export function SignIn() {
  return (
    <Container>
      <Logo source={logoSignin} />

      <Heading>Acesse sua conta</Heading>

      <ContainerForm>
        <Inputs placeholder="E-mail" />
        <Inputs placeholder="Senha" />

        <ButtonSignin>
          <TextButton>Acessar</TextButton>
        </ButtonSignin>
      </ContainerForm>
    </Container>
  );
}
