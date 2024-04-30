import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [senha, setSenha] = useState('')

    function handleGenerateButton(){
        let generateToken = generatePass()
        setSenha(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(senha)
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
            onPress={handleCopyButton}
        >
            <Text style={[styles.text]}>⚡COPIAR</Text>
        </Pressable>
    </>
  );
}