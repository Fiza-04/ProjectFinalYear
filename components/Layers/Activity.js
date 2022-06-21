import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { usernameState } from '../GlobalState/Globalstate'
import { createState, useState } from '@hookstate/core';


const Activity = () => {
    const state = useState(usernameState)

  return (
    <View>
      <Text>actgvgcg</Text>
    </View>
  )
}

export default Activity

const styles = StyleSheet.create({})