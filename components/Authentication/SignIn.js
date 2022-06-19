import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SigninMethod } from '../firebase/Auth'
import { set } from '../firebase/Crud'
import styles from './LoginStyle'

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
        <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
            
            <View>
                <View>
                    <Text style={styles.loginPart}>Sign in</Text>
                </View>
                <View style={styles.inputPart}>
                <TextInput
                    placeholder='email'
                    value={email}
                    onChangeText={setEmail}
                    style={styles.inputs}/>
                </View>
                <View style={styles.inputPart}>
                <TextInput
                    placeholder='username'
                    value={userName}
                    onChangeText={setUsername}
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
                    onPress={getSignin} 
                    style={styles.navPart}
                >
                    <Text style={{fontSize: 18, color: 'white'}}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

export default Signin

