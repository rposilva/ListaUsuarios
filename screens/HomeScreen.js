import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');

  useEffect(() => {
    async function carregarUsuario() {
      const nome = await AsyncStorage.getItem('usuario');
      if (nome) setUsuario(nome);
    }
    carregarUsuario();
  }, []);

  async function fazerLogout() {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('usuario');
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, {usuario}!</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Lista')}
      >
        <Text style={styles.botaoTexto}>Ver Lista de Usuários</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, styles.botaoLogout]}
        onPress={fazerLogout}
      >
        <Text style={styles.botaoTexto}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 32 },
  botao: { backgroundColor: '#6200ee', padding: 16, borderRadius: 8, marginBottom: 12, width: '80%', alignItems: 'center' },
  botaoLogout: { backgroundColor: '#e53935' },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});