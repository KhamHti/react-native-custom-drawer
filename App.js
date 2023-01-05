import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screeens/Home';
import Setting from './Screeens/Setting';
import Notification from './Screeens/Notification';
import Activity from './Screeens/Activity';
import List from './Screeens/List';
import Reports from './Screeens/Reports';
import FriendsRefer from './Screeens/FriendsRefer';


import SideMenu from './Screeens/SideMenu';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContent={props => <SideMenu {...props} />}
      initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Notifications' component={Notification} />
        <Drawer.Screen name="Activity" component={Activity} />
        <Drawer.Screen name="List" component={List} />
        <Drawer.Screen name="Reports" component={Reports} />
        <Drawer.Screen name="FriendsRefer" component={FriendsRefer} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


