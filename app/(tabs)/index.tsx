import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
      .catch(() => setErro('Erro ao carregar posts.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Text style={styles.mensagem}>Carregando...</Text>;
  if (erro) return <Text style={styles.mensagem}>{erro}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Posts</Text>
      <FlatList
        data={usuarios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
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
});