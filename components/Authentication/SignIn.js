import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SigninMethod } from '../firebase/Auth'
import { set } from '../firebase/Crud'

const Signin = ({navigation}) => {
    const [userName, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [passWord, setPass] = React.useState("")
    const getSignin = async () => {
        try {
            const res = await SigninMethod(email, passWord)
            console.log(res)
            navigation.push("Home")
            set({userName,passWord , res })
        } catch (error) { console.log(error) }
    }
    return (
        <View>
            <View>
                <Text>signin part</Text>
            </View>
            <View>
                <TextInput
                    placeholder='email'
                    value={email}
                    onChangeText={setEmail} />
                <TextInput
                    placeholder='username'
                    value={userName}
                    onChangeText={setUsername} />
                <TextInput
                    placeholder='Password'
                    value={passWord}
                    onChangeText={setPass}
                    keyboardType="visible-password"
                    secureTextEntry="true"
                />
                <TouchableOpacity
                    onPress={getSignin}
                >
                    <Text>Signin</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({})