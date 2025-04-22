import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'react-native';

type TabIcon = {
  size: number;
  color: string;
};

const trainingIcon = require('@/assets/images/training.png');
const workoutIcon = require('@/assets/images/workout.png');

const ExercisesIcon = ({ tabIcon }: { tabIcon: TabIcon }) => (
  <Image source={trainingIcon} style={{ width: tabIcon.size, height: tabIcon.size, tintColor: tabIcon.color }} />
);

const WorkoutPlanIcon = ({tabIcon}: {tabIcon: TabIcon}) => (
  <Image source={workoutIcon} style={{ width: tabIcon.size, height: tabIcon.size, tintColor: tabIcon.color }} />
);
 
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
        title: 'Workoutplans', tabBarIcon: ({ focused }) => <WorkoutPlanIcon tabIcon={{size: 24,color: focused ? '#7C3AED' : "#A1A1AA"}}/>,
          
      }} />
      <Tabs.Screen name="exercises" options={{
        title: 'Exercises', tabBarIcon: ({ focused }) => <ExercisesIcon tabIcon={{size: 24,color: focused ? '#7C3AED' : "#A1A1AA"}}/>,
      }} />
      <Tabs.Screen name="workout" options={{
        title: 'Workout', tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'stopwatch' : 'stopwatch'} color={color} size={24} />),
      }} />
    </Tabs>
  );
}