import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyle';

interface BatTextInputProps{
  senha: string 
}

export function BatTextInput(props: BatTextInputProps) {
  return (
        <TextInput
            placeholder='Senha'
            style={[styles.inputer]}
            value={props.senha}
        />
  );
}