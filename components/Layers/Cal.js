import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { usernameState } from '../GlobalState/Globalstate'
import { createState, useState } from '@hookstate/core';


const Calendar = () => {
    const state = useState(usernameState)

  return (
    <View>
      <Text>Calyvgh</Text>
    </View>
  )
}

export default Calendar

const styles = StyleSheet.create({})