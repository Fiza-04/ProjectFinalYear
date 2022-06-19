import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { usernameState, taskListState } from '../GlobalState/Globalstate'
import { createState, useState } from '@hookstate/core';
import AddTask from '../Task/AddTask';
import { get, getTask } from '../firebase/Crud';
import TaskList from '../Task/TaskList';
import { height, width } from '../Dimentions/Dimensions';
import Task from '../Task/Task';

const Home = () => {
  const state = useState(usernameState)
  const tasks = useState(taskListState)
  let res = state.get()

  React.useEffect(async () => {
    const data = await getTask("Task", res.id)
    //console.log(data)
    tasks.set(data)
  }, [])

  return (
    <View style={styles.Main}>
      <Text>add data</Text>
       <AddTask/>
       <TaskList />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  Main: {
    width, height, alignItems: "center",
    justifyContent: "center",
  }
})