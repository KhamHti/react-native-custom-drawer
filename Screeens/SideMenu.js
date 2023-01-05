import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';


export default function SideMenu(props)  {
    const [selectedId, setSelectedId] = useState(null);

    const commonImage = '../assets/img/Luffy.jpeg';
    const listArray = [
        {icon: commonImage, title: "Profile"},
        {icon: commonImage, title: "Messages"},
        {icon: commonImage, title: "Activity"},
        {icon: commonImage, title: "Lists"},
        {icon: commonImage, title: "Reports"},
        {icon: commonImage, title: "Friends Refer"},
        {icon: commonImage, title: "Setting"},
    
    ];
    const bottomArray = [
        {icon: commonImage, title: "Tell a friend"},
        {icon: commonImage, title: "Help and Feedback"},
    ];
    const Item = ({ title, icon, onPress, backgroundColor, color, index }) => (
        <TouchableOpacity 
        onPress={() => onPress(index)} 
        style={[styles.item, 
        {backgroundColor: backgroundColor}]}>
            <Image 
            source={require('../assets/img/Luffy.jpeg')}     
            style={{height: 25, width: 25, borderRadius: 40, marginLeft: 10}}
            />
            <Text style={[styles.title, {color: color}]}>{title}</Text>
        </TouchableOpacity>
      );
      
    const renderItem = ({item, index}) => {        
        const backgroundColor = item.title === selectedId ? "#BBC6C8" : "#e8e7e5";
        const color = item.title === selectedId ? '#469597' : 'black';

    return (
        <Item 
        onPress={(index) => {
            setSelectedId(item.title);
            props.navigation.navigate(props?.state?.routes[index].name);
        }}
        title={item.title} 
        icon={item.icon}
        index={index}
        backgroundColor= {backgroundColor}
        color={color} />
        )
    };
    

  return (
    <View style={{ flex: 1}}>                          
        <View style={{ 
            flex: 0.25, 
            backgroundColor: "#BBC6C8", 
            paddingTop: 40, 
            paddingHorizontal: 20,
            paddingBottom: 5
            }}>
            <Image 
                source={require('../assets/img/Luffy.jpeg')}     
                style={{height: 100, width: 100, borderRadius: 40}}
                />
            <Text style={{fontWeight: 'bold', fontSize: 18,paddingTop: 15}} >Monkey D.Luffy</Text>
            <Text style={{marginTop: 5}}>kingOfThePirates@strawhat.com</Text>
            <Text style={{marginTop: 3}}>{`5650 followers / 9 nakama`}</Text>
        </View>
        {/* bottomarray htae yin flex 0.55 */}
        <View style={{flex: 0.85, backgroundColor: "#e8e7e5"}}>
            <FlatList
                data={listArray}
                renderItem={renderItem}
            />
        </View>
        {/* <View style={{flex: 0.3, backgroundColor: "#e8e7e5"}}>
            <FlatList
                data={bottomArray}
                renderItem={renderItem}
            />      
        </View> */}
    </View>
  );
};


const styles = StyleSheet.create({
    item: {
      paddingVertical: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      borderRadius: 10,
    },
    title: {
      fontSize: 18,
      marginLeft: 20,
    },
  });
  