import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

import { AuthContextProvider } from '@contexts/AuthContext';
import { Routes } from '@routes/index';

export default function App() {
  
  return (
    <ThemeProvider theme={theme}>
        <StatusBar 
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        <AuthContextProvider>
          <Routes/>
        </AuthContextProvider>
    </ThemeProvider>
  );
}