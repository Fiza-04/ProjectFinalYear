import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { usernameState } from '../GlobalState/Globalstate'
import { createState, useState } from '@hookstate/core';


const Checklist = () => {
    const state = useState(usernameState)

  return (
    <View>
      <Text>chebhjfhdf</Text>
    </View>
  )
}

export default Checklist

const styles = StyleSheet.create({})