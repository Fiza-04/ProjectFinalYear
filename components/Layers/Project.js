import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { usernameState } from '../GlobalState/Globalstate'
import { createState, useState } from '@hookstate/core';


const Project = () => {
    const state = useState(usernameState)

  return (
    <View>
      <Text>Probbnvh</Text>
    </View>
  )
}

export default Project

const styles = StyleSheet.create({})