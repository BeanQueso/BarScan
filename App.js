import React from 'react'
import {StyleSheet, View} from 'react-native'
import ScanScreen from './screens/ScanScreen'

export default class App extends React.Component{
  render(){
    return(
      <View style = {{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <ScanScreen/>
      </View>
    )
  }
}