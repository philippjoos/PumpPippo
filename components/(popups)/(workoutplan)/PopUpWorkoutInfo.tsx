import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { Exercise } from "@/app/(tabs)/exercises";

// styles imports
import containerStyles from '@/assets/styles/containerStyles';
import textStyles from '@/assets/styles/textStyles';
import defaultStyles from '@/assets/styles/defaultStyles';

interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  exercises: Exercise[];
}

export default function PopUpWorkoutInfo({ visible, onClose, title, exercises }: PopupModalProps) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={defaultStyles.modalBackground}>
        <View style={containerStyles.modalContainer}>
          <Text style={textStyles.title}>{title}</Text>
          {exercises.length == 0 ? (
            <Text style={textStyles.content}>the Workoutplan doesn't include exercises!</Text>
          ) : (
            <>
              <Text style={textStyles.content}></Text>
              {exercises.map((exercise, index) => (
                <View key={index}>
                  <Text style={textStyles.ExerciseTitle}>{exercise.name}</Text>
                  {exercise.sets?.map((set, index) => (
                    <View key={index} style={containerStyles.rowContainer}>
                      <Text style={textStyles.title}>Set {set.setCount}:      </Text>
                      <Text style={textStyles.content}>Reps: {set.reps},      </Text>
                      <Text style={textStyles.content}>Weight: {set.weight},      </Text>
                      <Text style={textStyles.content}>Rest Time: {set.rest_time} seconds</Text>
                    </View>
                  ))}
                  <Text style={textStyles.content}></Text>
                </View>
              ))}
            </>
          )}

          <Button title="Close" onPress={onClose} color={'#6D28D9'} />
        </View>
      </View>
    </Modal>
  );
}