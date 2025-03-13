// import Cart from '@/components/screens/cart/Cart'

import Home from '@/components/screens/home/Home'
import Search from '@/components/screens/search/Search'

import { IRoute } from './navigation.types'
import Auth from '@/components/screens/auth/Auth'
import Favorites from '@/components/screens/favorites/Favorites'
import Explorer from '@/components/screens/explorer/Explorer'
import Profile from '@/components/screens/profile/Profile'
import Category from '@/components/screens/category/Category'

export const routes: IRoute[] = [
	

	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Auth',
		component: Auth
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Explorer',
		component: Explorer
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Category',
		component: Category
	},
	
]