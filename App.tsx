import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NativeBaseProvider } from 'native-base';

import theme from "./src/theme";

import { AuthContextProvider } from "@contexts/AuthContext";
import { Routes } from "@routes/index";

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
