import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { usernameState } from '../GlobalState/Globalstate'
import { createState, useState } from '@hookstate/core'
import { winHeight, winWidth } from '../Authentication/Dimensions'
import { FiActivity, FiCalendar, FiDatabase, FiFileText } from "react-icons/fi"
import { BsJournalCheck } from "react-icons/bs";

const Team1 = ({navigation}) => {
    const state = useState(usernameState)

  return (
    <View style={navStyle.container}>
      <Text> Heyy, You are on Team 1!!</Text>
      
      <View style={navStyle.NavContainer}>
        <View style={navStyle.NavBar}>

        <TouchableOpacity style={navStyle.IconPos}
        onPress={() => navigation.navigate("Project")}>
            <FiFileText style={{width: 30, height: 30}}/> 
        </TouchableOpacity>

        <TouchableOpacity style={navStyle.IconPos}
        onPress={() => navigation.navigate("Activity")}>
            <FiActivity style={{width: 30, height: 30}}/> 
        </TouchableOpacity>

        <TouchableOpacity style={navStyle.IconPos}
        onPress={() => navigation.navigate("DB")}>
            <FiDatabase style={{width: 30, height: 30}}/> 
        </TouchableOpacity>

        <TouchableOpacity style={navStyle.IconPos}
        onPress={() => navigation.navigate("Calendar")}>
            <FiCalendar style={{width: 30, height: 30}}/> 
        </TouchableOpacity>

        <TouchableOpacity style={navStyle.IconPos}
        onPress={() => navigation.navigate("Checklist")}>
            <BsJournalCheck style={{width: 30, height: 30}}/> 
        </TouchableOpacity>
        </View>
      </View> 
      
    </View>
  )
}

export default Team1


const navStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    NavContainer:{
        position: 'absolute',
        alignments: 'center',
        bottom: 10
    },
    NavBar:{
        flexDirection: 'row',
        backgroundColor: 'black',
        width: winWidth / 2,
        justifyContent: 'space-evenly',
        borderRadius: 15,
        height: winHeight / 10
    },
    IconPos: {
      alignSelf: 'center',
      color: 'white',
      paddingHorizontal: 10
    }
})