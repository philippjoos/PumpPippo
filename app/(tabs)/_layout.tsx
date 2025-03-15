import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs 
    screenOptions={{
        tabBarActiveTintColor: '#20b2aa',
      }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({color, focused}) => ( 
        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />),
        }} />
      <Tabs.Screen name="workoutplan" options={{ title: 'Workoutplan', tabBarIcon: ({ color, focused }) => (
        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>),
        }} />
      <Tabs.Screen name="exercises" options={{ title: 'exercises', tabBarIcon: ({ color, focused }) => (
        <Ionicons name={focused ? 'airplane' : 'airplane'} color={color} size={24}/>),
        }} />
      <Tabs.Screen name="workout" options={{ title: 'Workout', tabBarIcon: ({ color, focused }) => (
        <Ionicons name={focused ? 'stopwatch' : 'stopwatch'} color={color} size={24}/>),
        }} />
    </Tabs>
  );
}