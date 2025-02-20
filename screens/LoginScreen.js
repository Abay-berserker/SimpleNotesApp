import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const setDefaultCredentials = async () => {
      try {
        const storedCredentials = await AsyncStorage.getItem('credentials');
        if (!storedCredentials) {
          const defaultCredentials = { username: 'user', password: 'pass123' };
          await AsyncStorage.setItem('credentials', JSON.stringify(defaultCredentials));
        }
      } catch (e) {
        console.log('Error setting default credentials:', e);
      }
    };
    setDefaultCredentials();
  }, []);

  const handleLogin = async () => {
    try {
      const storedCredentials = await AsyncStorage.getItem('credentials');
      const credentials = JSON.parse(storedCredentials);

      if (username === credentials.username && password === credentials.password) {
        setError('');
        navigation.replace('Home');
      } else {
        setError('Invalid username or password');
      }
    } catch (e) {
      console.log('Error during login:', e);
      setError('Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Simple Notes</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: '#ff4444',
    textAlign: 'center',
    marginBottom: 15,
  },
});