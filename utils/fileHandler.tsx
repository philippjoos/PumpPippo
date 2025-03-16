import * as FileSystem from 'expo-file-system';

/** Usage of FileHandler:
import FileHandler from './FileHandler';

// Definiere den Datei-Namen
const fileName = 'data.json';

// Beispiel: JSON-Datei lesen
FileHandler.readJsonFile(fileName).then((data) => {
  console.log('Gelesene Daten:', data);
});

// Beispiel: JSON-Datei überschreiben mit neuen Daten
const newData = { name: 'John Doe', age: 30 };
FileHandler.modifyJsonFile(fileName, newData).then((success) => {
  console.log('Datei gespeichert:', success);
});

// Beispiel: JSON-Datei löschen
FileHandler.deleteJsonFile(fileName).then((success) => {
  console.log('Datei gelöscht:', success);
});

 */

const FileHandler = {
  /**
   * Liest eine JSON-Datei und gibt den Inhalt als Objekt oder Array zurück
   * @param {string} fileName - Der Name der JSON-Datei
   * @returns {Promise<any>} - Parsed JSON-Daten oder null, falls Datei nicht existiert
   */
  async readJsonFile(fileName: string) {
    try {
      const filePath = `${FileSystem.documentDirectory}${fileName}`;
      const fileInfo = await FileSystem.getInfoAsync(filePath);
      
      if (!fileInfo.exists) {
        console.warn(`Datei nicht gefunden: ${filePath}`);
        return null;
      }
      
      const content = await FileSystem.readAsStringAsync(filePath);
      return JSON.parse(content);
    } catch (error) {
      console.error('Fehler beim Lesen der JSON-Datei:', error);
      return null;
    }
  },

  /**
   * Speichert oder modifiziert eine JSON-Datei
   * @param {string} fileName - Der Name der JSON-Datei
   * @param {any} newData - Die neuen JSON-Daten
   * @returns {Promise<boolean>} - true, wenn erfolgreich, sonst false
   */
  async modifyJsonFile(fileName: string, newData: any) {
    try {
      const filePath = `${FileSystem.documentDirectory}${fileName}`;
      await FileSystem.writeAsStringAsync(filePath, JSON.stringify(newData, null, 2));
      return true;
    } catch (error) {
      console.error('Fehler beim Schreiben der JSON-Datei:', error);
      return false;
    }
  },

  /**
   * Löscht eine JSON-Datei
   * @param {string} fileName - Der Name der JSON-Datei
   * @returns {Promise<boolean>} - true, wenn erfolgreich gelöscht, sonst false
   */
  async deleteJsonFile(fileName: string) {
    try {
      const filePath = `${FileSystem.documentDirectory}${fileName}`;
      const fileInfo = await FileSystem.getInfoAsync(filePath);
      
      if (!fileInfo.exists) {
        console.warn(`Datei nicht gefunden: ${filePath}`);
        return false;
      }
      
      await FileSystem.deleteAsync(filePath);
      return true;
    } catch (error) {
      console.error('Fehler beim Löschen der JSON-Datei:', error);
      return false;
    }
  },
};

export default FileHandler;