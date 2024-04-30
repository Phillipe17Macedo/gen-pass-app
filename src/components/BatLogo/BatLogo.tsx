import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/security-gif.gif';

export function BatLogo() {
  return (
    <>
        <Text style={[styles.title]}>
            PASSWORD GENERATOR
        </Text>
        <Image source={batLogo} style={[styles.batImage]}/>
    </>
  );
}