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
        <Tab.Screen name="Home" component={Home} options={{
          
        }}/>
        <Tab.Screen name="Search" component={Search} options={{
          
        }}/>
        <Tab.Screen name="Inbox" component={Inbox} options={{
          
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
          
        }}/>
        <Tab.Screen name="New" component={New} options={{
          
        }}/>
      </Tab.Navigator>
    );
}