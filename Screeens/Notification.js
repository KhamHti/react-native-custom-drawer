import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notification = ({navigation}) => {
    return (
      <View style={style.container} >
        <Text>Notification</Text>
        <Button onPress={() => navigation.navigate("Home")}
            title="Go back to home"
        />
      </View>
    );
}

export default Notification;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e7e5',
    }
})