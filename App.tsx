import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stock from './components/Stock';
import warehouse from './assets/warehouse.jpg';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <Text style={{color: '#03c588', fontSize: 42, alignSelf: 'center'}}>Lager-Appen</Text>
          <Image source={warehouse} style={styles.image} />
          <Stock />
          <StatusBar style="auto" />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    color: '#fff',
  },
  base: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
  },
  image: {
    width: 320,
    height: 240,
    borderColor: '#fff',
    borderWidth: 5,
    alignSelf: 'center',
  },
});