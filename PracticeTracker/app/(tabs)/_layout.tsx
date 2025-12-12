import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabsLayout() {
  return (
  <Tabs
    screenOptions={{ tabBarActiveTintColor: "#b842e0ff"}}
    >
    <Tabs.Screen name="index" options={{ title: "Teams", 
      tabBarIcon: ({ color }) => (
        <AntDesign name="team" size={24} color={color} />
      )
      }} />
    <Tabs.Screen name="calendar" options={{ title: "Calendar",
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="calendar-day" size={24} color={color} />
      )
     }} />
    <Tabs.Screen name="profile" options={{ title: "Profile", 
      tabBarIcon: ({ color }) => (
        <Ionicons name="person-circle-sharp" size={24} color={color} />
      )
     }} />
  </Tabs>
);
}