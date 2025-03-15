import { StyleSheet, View, Pressable, Text } from 'react-native';
import planListData from '@/data/savedWorkout.json';
import { useState } from "react"; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deleteFile, readFromFile, saveToFile} from '@/utils/fileHandler';
import PopUpDeleteWorkoutplan from '@/components/(popups)/PopUpDeleteWorkoutplan';

type Props = {
  label: string;
  workoutplan: string;
};

export default function ButtonViewInfo({ label, workoutplan }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const showMessage = () => {
    const deleteApproveText = "Are you sure you want to delete the following workoutplan?\n" + workoutplan;
    setModalContent(deleteApproveText);
    setModalVisible(true);
  };

  return (
    <View style={[styles.buttonContainer, { borderWidth: 1, borderColor: 'white', borderRadius: 18 },]}>
      <Pressable style={styles.button} onPress={() => {showMessage()}}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
       <PopUpDeleteWorkoutplan visible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={() => deleteWorkoutPlan(workoutplan)} title={"confirm deleting"} content={modalContent} />
    </View>
  );
}

const deleteWorkoutPlan = async (workoutplan: string) => {
  const planList = await readFromFile();
  const newPlanList = planList.find((item: any) => item.name !== workoutplan);
  await saveToFile(newPlanList);
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
