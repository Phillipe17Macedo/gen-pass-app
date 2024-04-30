import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';

export function BatButton() {
    const [senha, setSenha] = useState('')

    function handleGenerateButton(){
        setSenha('Teste')
    }

  return (
    <>
        <BatTextInput senha={senha}/>

        <Pressable
            style={[styles.botao]}
            onPress={handleGenerateButton}
        >
            <Text style={[styles.text]}>GENERATE</Text>
        </Pressable>
        <Pressable
            style={[styles.botao]}
            onPress={() => {console.log('Pressionado')}}
        >
            <Text style={[styles.text]}>⚡COPIAR</Text>
        </Pressable>
    </>
  );
}