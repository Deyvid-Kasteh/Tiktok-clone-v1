import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'


import { Home } from '../pages/home'
import { Search } from '../pages/search'
import { Inbox } from '../pages/inbox'
import { Profile } from '../pages/profile'
import { New } from '../pages/new'


const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "black",
              borderTopWidth: 0,
        }
      }}>
        <Tab.Screen name="Home" component={Home} tabbaric/>
        <Tab.Screen name="Search" component={Search} tabbaric/>
        <Tab.Screen name="Inbox" component={Inbox} tabbaric/>
        <Tab.Screen name="Profile" component={Profile} tabbaric/>
        <Tab.Screen name="New" component={New} tabbaric/>
      </Tab.Navigator>
    );
}