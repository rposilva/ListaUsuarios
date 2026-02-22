import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function ListaScreen({ navigation }) {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
      .catch(() => setErro('Erro ao carregar usuários.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Text style={styles.mensagem}>Carregando...</Text>;
  if (erro) return <Text style={styles.mensagem}>{erro}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Usuários</Text>
      <FlatList
        data={usuarios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.botaoTexto}>Home</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: { padding: 16, marginBottom: 12, backgroundColor: '#f0f0f0', borderRadius: 8 },
  nome: { fontSize: 16, fontWeight: 'bold' },
  email: { fontSize: 14, color: '#555' },
  mensagem: { flex: 1, textAlign: 'center', marginTop: 40, fontSize: 16 },
  botao: { backgroundColor: '#6200ee', padding: 16, borderRadius: 8 },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});