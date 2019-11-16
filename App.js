import React, { useState } from 'react';
import { Text, StatusBar , View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import Input from './Input';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function  handleTextChangeEmail(newText) {
    setEmail(newText);
  } 

  function handleTextChangeSenha(newText) {
    setSenha(newText); 
  }

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
          <Input 
            label="Email"
            value={email}
            onChangeText={handleTextChangeEmail}
          />

          <Input 
            label="Senha"
            value={senha}
            onChangeText={handleTextChangeSenha}
          />
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 18,
  },

});
