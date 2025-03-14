import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import Auth from '@/components/screens/auth/Auth'

import { useAuth } from '@/hooks/useAuth'

import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'
import Home from '@/components/screens/home/Home'
import Profile from '@/components/screens/profile/Profile'
import Search from '@/components/screens/search/Search'
import Explorer from '@/components/screens/explorer/Explorer'

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
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigator
