import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Setting = () => {
  return (
    <View style={style.container} >
      <Text>This is Setting</Text>
    </View>
  )
}

export default Setting;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
