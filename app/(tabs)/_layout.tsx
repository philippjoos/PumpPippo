import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#7C3AED',
        tabBarStyle: {
          backgroundColor: '#1F1F1F',
          borderTopWidth: 0, // Entfernt die Trennlinie oben an der TabBar
          elevation: 0, // Entfernt den Schatten der TabBar (für Android)
        },
        headerStyle: {
          backgroundColor: '#1F1F1F',
          borderBottomWidth: 0, // Entfernt die Trennlinie unten am Header
          shadowOpacity: 0, // Entfernt den Schatten des Headers (für iOS)
          elevation: 0, // Entfernt den Schatten des Headers (für Android)
        },
        headerTintColor: '#FFFFFF',
      }}>
      <Tabs.Screen name="index" options={{
        title: 'Home', tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />),
      }} />
      <Tabs.Screen name="workoutplan" options={{
        title: 'Workoutplan', tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />),
      }} />
      <Tabs.Screen name="exercises" options={{
        title: 'exercises', tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'airplane' : 'airplane'} color={color} size={24} />),
      }} />
      <Tabs.Screen name="workout" options={{
        title: 'Workout', tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'stopwatch' : 'stopwatch'} color={color} size={24} />),
      }} />
    </Tabs>
  );
}