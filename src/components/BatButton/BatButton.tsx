import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {
    const [senha, setSenha] = useState('')

    function handleGenerateButton(){
        let generateToken = generatePass()
        setSenha(generateToken)
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