import { useNavigation } from '@react-navigation/native'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'
import { useTypedNavigation } from '../hooks/useTypedNavigation'


import { IAuthFormData } from '@/types/auth.interface'


import { TypeRootStackParamList } from '@/navigation/navigation.types'
import Loader from '../ui/Loader'
import Button from '../ui/button/Button'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSumbit: SubmitHandler<IAuthFormData> = data => {
		console.log(data)
	}
	const { navigate } = useTypedNavigation()

const isLoading = false

	return (
		<View className='mx-2 items-center justify-center h-full'>
			<View className='w-9/12'>
				<Text className='text-center text-black text-3xl font-medium mb-8'>
					
					{isReg ? 'Sign up' : 'Login'}
				</Text>
        {isLoading ? ( 
          <Loader /> ): ( <>
          <Button onPress={handleSubmit(onSumbit)}>
    {isReg ? 'Sign Up' : 'Login'}
</Button>

<Pressable onPress={()=> setIsReg(!isReg)}></Pressable>
<Text className='text-black text-center text-base mt-6'>
    {isReg
      ? 'Already have an account? '
      : "Don't have an account? "}
    <Text className='text-[#47AA52]'>
      {isReg ? 'Login' : 'Sign up'}
    </Text>
  </Text>
          </>

        )}
			</View>
		</View>
	)
}

export default Auth
