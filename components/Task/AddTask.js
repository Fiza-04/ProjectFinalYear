import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { usernameState } from '../GlobalState/Globalstate'
import { createState, useState } from '@hookstate/core';
import { set } from "../firebase/Crud"
const AddTask = () => {
    const state = useState(usernameState)
    const [task, setTask] = React.useState("")
    let res = state.get()
    const data = {
        task: task,
        userid: res.id
    }
    const setdata = async () => {
        try {
            const res = await set(data, "Task")
            console.log(res)
        } catch (error) { console.log(error) }
    }
    return (
        <View>
            <Text>AddTask</Text>
            <View>
                <TextInput
                    placeholder='add task'
                    value={task}
                    onChangeText={setTask}
                />
                <Button title='click' onPress={setdata} />
            </View>
        </View>
    )
}

export default AddTask

const styles = StyleSheet.create({})