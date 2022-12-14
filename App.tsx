import { LoadingIndicator } from '@components/Loading/styles';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

export default function App() {
  return (

    <ThemeProvider theme={theme}>
      <View>
        <LoadingIndicator />
      </View>
    </ThemeProvider>
  );
}