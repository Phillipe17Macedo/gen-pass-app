import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import styles from './Style';
import { BatLogo } from '../BatLogo/BatLogo';

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />

      <View style={[styles.logoContainer]}>
        <BatLogo/>
      </View>
      
      <Text>TELA HOME </Text>
    </View>
  );
}

