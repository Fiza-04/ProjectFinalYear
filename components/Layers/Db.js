import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { usernameState } from '../GlobalState/Globalstate'
import { createState, useState } from '@hookstate/core';


const DB = () => {
    const state = useState(usernameState)

  return (
    <View>
      <Text>Databgdhd</Text>
    </View>
  )
}

export default DB

const styles = StyleSheet.create({})