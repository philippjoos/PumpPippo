import containerStyles from '@/assets/styles/containerStyles';
import defaultStyles from '@/assets/styles/defaultStyles';
import textStyles from '@/assets/styles/textStyles';
import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import FileHandler from '@/utils/fileHandler';
import { Exercise } from '@/app/(tabs)/exercises';
import { ScrollView } from 'react-native-gesture-handler';

export default function workout() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  
  return (
    <View style={[containerStyles.container, { flex: 1 }]}>
      <View style={containerStyles.container}>
        {/* ScrollView of Exercises in workoutplan */}
        <ScrollView style={[defaultStyles.scrollView, { flex: 2 }]}>
          <Text style={textStyles.title}>exercises:</Text>
        </ScrollView>
      </View>
      <View style={[containerStyles.container, { flex: 1 }]}>
        {/* Container for current executed exercise */}
        <Text style={textStyles.title}>current exercise:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  apptitle: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
