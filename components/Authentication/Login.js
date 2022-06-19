import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LoginMethod } from '../firebase/Auth'
import { usernameState } from '../GlobalState/Globalstate'
import { createState, useState } from '@hookstate/core';
import styles from './LoginStyle';

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
        <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
            <View>
                <View>
                    <Text style={styles.loginPart}>Login</Text>
                </View>
                <View style={styles.inputPart}> 
                <TextInput
                    placeholder='email'
                    value={email}
                    onChangeText={setEmail}
                    style={styles.inputs} />
                </View>
                <View style={styles.inputPart}>
                <TextInput
                    placeholder='Password'
                    value={passWord}
                    onChangeText={setPass}
                    keyboardType="visible-password"
                    secureTextEntry="true"
                    style={styles.inputs}
                />
                </View>
                
                <TouchableOpacity
                    onPress={getLogin}
                >
                    <Text style={styles.navPart}>
                    <Text style={{fontSize: 18}}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.navPart}>Haven't signed up yet,sign up now
                    <Text
                        style={{ color: "blue",  fontSize: 16}}
                        onPress={() => navigation.navigate("signin")}> Sign up</Text>
                </Text>
            </View>
            </View>
        </View>
    )
}

export default Login

