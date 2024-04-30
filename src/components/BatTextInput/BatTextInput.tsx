import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyle';

export function BatTextInput() {
  return (
        <TextInput
            placeholder='Senha'
            style={[styles.inputer]}
            multiline={true}
        />
  );
}