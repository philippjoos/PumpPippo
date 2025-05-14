import { WorkoutPlan } from '@/app/(tabs)/workoutplan';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Exercise } from '@/app/(tabs)/exercises';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';

class FileHandler {
  //EventListener für AsyncStorage
  static storageEmitter = new EventEmitter();

  // Speichert ein JSON-Objekt in AsyncStorage
  static async saveData(key: string, jsonObject: Record<string, any>): Promise<void> {
    try {
      const jsonValue = JSON.stringify(jsonObject);
      await AsyncStorage.setItem(key, jsonValue);
      this.storageEmitter.emit(key, jsonObject); // Emit event after saving
    } catch (error) {
      console.error('Fehler beim Speichern der JSON-Daten:', error);
    }
  }

  // Ruft ein JSON-Objekt aus AsyncStorage ab
  static async getWorkoutplans(): Promise<WorkoutPlan[] | null> {
    try {
      const jsonValue = await AsyncStorage.getItem('workoutplans');
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Fehler beim Abrufen der JSON-Daten:', error);
      return null;
    }
  }

  static async getExercises(): Promise<Exercise[] | null> {
    try {
      const jsonValue = await AsyncStorage.getItem('exercises');
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Fehler beim Abrufen der JSON-Daten:', error);
      return null;
    }
  }

  static addStorageListener(key: string, callback: (data: any) => void): void {
    this.storageEmitter.addListener(key, callback);
  }

  static removeStorageListener(key: string, callback: (data: any) => void): void {
    this.storageEmitter.removeAllListeners(key);
  }
}

export default FileHandler;