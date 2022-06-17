import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LoginMethod } from '../firebase/Auth'
import { usernameState } from '../GlobalState/Globalstate'
import { createState, useState } from '@hookstate/core';

const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState("")
    const [passWord, setPass] = React.useState("")
    const state = useState(usernameState)
    const getLogin = async () => {
        try {
            const res = await LoginMethod(email, passWord)
            console.log(res)
            state.set(res)
            navigation.push("Home")
        } catch (error) { console.log(error) }
    }
    return (
        <View>
            <View>
                <Text>Login part</Text>
            </View>
            <View>
                <TextInput
                    placeholder='email'
                    value={email}
                    onChangeText={setEmail} />
                <TextInput
                    placeholder='Password'
                    value={passWord}
                    onChangeText={setPass}
                    keyboardType="visible-password"
                    secureTextEntry="true"
                />
                <TouchableOpacity
                    onPress={getLogin}
                >
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>havent signined up,sign up now
                    <Text
                        style={{ color: "blue" }}
                        onPress={() => navigation.navigate("signin")}>sign up</Text>
                </Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})