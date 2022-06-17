import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { usernameState } from '../GlobalState/Globalstate'
import { createState, useState } from '@hookstate/core';

const Home = () => {
    const state = useState(usernameState)

  return (
    <View>
      <Text>{state.get()}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})