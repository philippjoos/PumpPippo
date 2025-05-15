import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type TabIcon = {
  size: number;
  color: string;
};

const trainingIcon = require('@/assets/images/training.png');
const workoutIcon = require('@/assets/images/workout.png');

const ExercisesIcon = ({ tabIcon }: { tabIcon: TabIcon }) => (
  <Image source={trainingIcon} style={{ width: tabIcon.size, height: tabIcon.size, tintColor: tabIcon.color }} />
);

const WorkoutPlanIcon = ({ tabIcon }: { tabIcon: TabIcon }) => (
  <Image source={workoutIcon} style={{ width: tabIcon.size, height: tabIcon.size, tintColor: tabIcon.color }} />
);

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />),
          headerTitle: ({ tintColor }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="home-sharp" size={24} color={tintColor} style={{ marginRight: 8 }} />
              <Text style={{ color: tintColor, fontSize: 18 }}>Home</Text>
            </View>
          )
        }} />
        <Tabs.Screen name="workoutplan" options={{
          title: 'Workoutplans',
          tabBarIcon: ({ focused }) => <WorkoutPlanIcon tabIcon={{ size: 24, color: focused ? '#7C3AED' : "#A1A1AA" }} />,
          headerTitle: ({ tintColor }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <WorkoutPlanIcon tabIcon={{ size: 24, color: tintColor || '#FFFFFF' }} />
              <Text style={{ color: tintColor, fontSize: 18 }}>Workoutplans</Text>
            </View>
          )

        }} />
        <Tabs.Screen name="exercises" options={{
          title: 'Exercises',
          tabBarIcon: ({ focused }) => <ExercisesIcon tabIcon={{ size: 24, color: focused ? '#7C3AED' : "#A1A1AA" }} />,
          headerTitle: ({ tintColor }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ExercisesIcon tabIcon={{ size: 24, color: tintColor || '#FFFFFF' }} />
              <Text style={{ color: tintColor, fontSize: 18, marginLeft: 8 }}>Exercises</Text>
            </View>
          ),
        }} />
        <Tabs.Screen name="workout" options={{
          title: 'Workout',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'stopwatch' : 'stopwatch'} color={color} size={24} />),
          headerTitle: ({ tintColor }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="stopwatch" size={24} color={tintColor} style={{ marginRight: 8 }} />
              <Text style={{ color: tintColor, fontSize: 18 }}>Workout</Text>
            </View>
          ),
        }} />
      </Tabs>
    </GestureHandlerRootView>
  );
}