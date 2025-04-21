import { Text, View } from 'react-native';
import textStyles from '@/assets/styles/textStyles';
export default function index() {
  return (
    <View style={textStyles.apptitle}>
      <Text style={textStyles.text}>PumpPippo</Text>
    </View>
  );
}
