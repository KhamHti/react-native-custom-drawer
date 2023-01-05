import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#BBC6C8"}} >
      <Text style={{margin: 10}} >This is Home</Text>
        <View style={{margin: 10}}>
            <Button 
            onPress={() => navigation.navigate('Notifications')}
            title='Go to Noti'
            />
        </View>
    </View>
  )
}

export default HomeScreen;


