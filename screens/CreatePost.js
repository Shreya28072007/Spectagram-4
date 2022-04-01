import React,{Component} from 'react';
import {View , StyleSheet , Text} from 'react-native';

export default class CreatePost extends Component{
  render(){
    return(
      <View 
      style={{
        flex : 1,
        justifyContent : "center",
        alignItems : "center"}}>
      <Text> This is Create Post Screen</Text>
      </View>
    )
  }
}