import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');

  async function fazerLogin() {
    await AsyncStorage.setItem('token', 'meu-token-secreto');
    await AsyncStorage.setItem('usuario', usuario);
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 32, backgroundColor: '#fff' },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 32, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 16, fontSize: 16 },
  botao: { backgroundColor: '#6200ee', padding: 16, borderRadius: 8, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});