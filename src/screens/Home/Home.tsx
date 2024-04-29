import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import styles from './Style';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>TELA HOME </Text>
      <StatusBar style="auto" />
    </View>
  );
}

