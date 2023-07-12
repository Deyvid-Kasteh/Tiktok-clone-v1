import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {} from '@expo/'


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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Inbox" component={Inbox} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="New" component={New} />
      </Tab.Navigator>
    );
}