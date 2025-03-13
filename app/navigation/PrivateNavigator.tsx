import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import Auth from '@/components/screens/auth/Auth'

import { useAuth } from '@/hooks/useAuth'

import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'
import Home from '@/components/screens/home/Home'
import Profile from '@/components/screens/profile/Profile'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator: FC = () => {
	const { user } = useAuth()
	

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#ffffff'
				}
			}}
		>
			{user ? (
				routes.map(route => (
					<Stack.Screen key={route.name} {...route} />
				))
			) : (
				<Stack.Screen name='Auth' component={Home} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigator
