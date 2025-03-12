import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from 'app/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from '@/providers/AuthProvider';
import Toast from '@/components/ui/Toast';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import Home from '@/components/screens/home/Home';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App() {
  return (
    <>
    <Home />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
          <View></View>
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar style="light" />
      <Toast />
  </QueryClientProvider>
    </>
  );
}
