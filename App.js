import React from 'react';
import { View, Image, Button, Text, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MainNavigation from './components/Navigation/MainNavigtaion';
import useTimer from './components/Timer/Timer';
import { useCountdown } from './components/Timer/Timer2';
import AddTask from './components/Task/AddTask';
import TaskList from './components/Task/TaskList';

const App = () => {
  //const [days, hours, minutes, seconds] = useCountdown(400);
  // console.log([days, hours, minutes, seconds])
  const [photo, setPhoto] = React.useState(null);
  const [uri, setUri] = React.useState("")

  const handleChoosePhoto = async () => {
    
  };

  const upload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    setUri(result.uri)
    let filename = uri.split('/').pop();

    let fileType = uri.substring(uri.lastIndexOf(".") + 1);
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    console.log(type)
    let formData = new FormData();

    try {
      formData.append("avatar", {
        uri,
        name: new Date(),
        type: `image/png`
      });
      
      let options = {
        method: "POST",
        body:formData ,
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json’',
        },
      };

      let response = await fetch("http://localhost:8000/img" ,options)
      console.log(response)

    } catch (error) {
      console.log("bad", error)
    }

  }

  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <MainNavigation />
    </View>
  );
};

export default App;
const Training = () => {
  const { time, startTimer, stopTimer } = useTimer(20)
  return <>
      <Text>{time}</Text>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
  </>
}


