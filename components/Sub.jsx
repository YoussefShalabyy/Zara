import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Sub(props) {
  return (
    <View>
      <TouchableOpacity style={{width:"100%"}}>
        <Text style={{fontSize:"20%"}}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}