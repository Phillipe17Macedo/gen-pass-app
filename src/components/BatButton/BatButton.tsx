import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';

export function BatButton() {
  return (
    <View>
        <Pressable
            style={[styles.botao]}
            onPress={() => {console.log('Pressionado')}}
        >
            <Text style={[styles.text]}>GENERATE</Text>
        </Pressable>
        <Pressable
            style={[styles.botao]}
            onPress={() => {console.log('Pressionado')}}
        >
            <Text style={[styles.text]}>⚡COPIAR</Text>
        </Pressable>
    </View>
  );
}