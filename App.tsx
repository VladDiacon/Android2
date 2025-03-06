import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Text,View } from 'react-native';
import './global.css';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from 'app/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
  
    <>
  <SafeAreaProvider>
    
      <NavigationContainer>  {/* Обертка для корректной работы навигатора */}
        <Navigation />
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
   </>
  );
}

// export default function App() {
//   return (
//     <>
//     <View className='items-center justify-center'>
//     <Text className='bg-black' >Hello</Text>
//     </View>
  
//       <ScreenContent title="Hom" path="App.tsx" />
//       <Text className='bg-orange-800'>Hello</Text>
//       <StatusBar style="auto" />
      
//     </>
//   );
// }
