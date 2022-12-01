import { LoadingIndicator } from '@components/Loading/styles';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Home from '@screens/home/home';
import theme from './src/theme';

export default function App() {
  return (

    <ThemeProvider theme={theme}>
        <Home/>
    </ThemeProvider>
  );
}