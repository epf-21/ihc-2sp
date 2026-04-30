import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="feature/cuentas-pago-qr" options={{ headerShown: false }} />
        <Stack.Screen name="feature/factura-preaviso" options={{ headerShown: false }} />
        <Stack.Screen name="feature/reclamos" options={{ headerShown: false }} />
        <Stack.Screen name="feature/notificaciones" options={{ headerShown: false }} />
        <Stack.Screen name="feature/ubicacion" options={{ headerShown: false }} />
        <Stack.Screen name="feature/electrolineras" options={{ headerShown: false }} />
        <Stack.Screen name="feature/account-detail/[nus]" options={{ headerShown: false }} />
        <Stack.Screen name="feature/invoice-detail/[nus]" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
