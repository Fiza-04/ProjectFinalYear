import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'

const Task = () => {
  return (
    <View>
      <TaskList/>
      <AddTask />
    </View>
  )
}

export default Task

const styles = StyleSheet.create({})