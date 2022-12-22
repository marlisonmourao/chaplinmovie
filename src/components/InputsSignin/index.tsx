import { TextInput, TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Container, Inputs, Error } from './styles';

interface Props extends TextInputProps {
  error: any;
}

export function InputSignin({ error, ...rest}: Props) {
  return(
    <Container>
      <Inputs 
        {...rest}
      />

    { error && <Error>{error}</Error>}

    </Container>
  )
}
