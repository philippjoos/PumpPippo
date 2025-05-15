import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import textStyles from '@/assets/styles/textStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={textStyles.apptitle}>
          <Text style={textStyles.text}>PumpPippo</Text>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>

  );
}
