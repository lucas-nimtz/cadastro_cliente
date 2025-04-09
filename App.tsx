import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tela_cadastro_cliente from './src/views/tela_cadastro_cliente';
import React from 'react';

export default function App() {
  return (
    <Tela_cadastro_cliente></Tela_cadastro_cliente>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
