import * as FileSystem from 'expo-file-system';

const filePath = FileSystem.documentDirectory + 'data.json';

// Datei speichern
export const saveToFile = async (data: any) => {
  try {
    await FileSystem.writeAsStringAsync(filePath, JSON.stringify(data));
    console.log('Datei gespeichert:', filePath);
  } catch (error) {
    console.error('Fehler beim Speichern:', error);
  }
};

// Datei lesen
export const readFromFile = async () => {
  try {
    const content = await FileSystem.readAsStringAsync(filePath);
    return JSON.parse(content);
  } catch (error) {
    console.error('Fehler beim Lesen:', error);
    return {};
  }
};

// Datei löschen
export const deleteFile = async () => {
  try {
    await FileSystem.deleteAsync(filePath);
    console.log('Datei gelöscht:', filePath);
  } catch (error) {
    console.error('Fehler beim Löschen:', error);
  }
};