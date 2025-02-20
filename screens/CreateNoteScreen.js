import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function CreateNoteScreen({ navigation, route }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [emoji, setEmoji] = useState('📘'); // Эмодзи по умолчанию
  const { setNotes, note } = route.params || {};

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setEmoji(note.emoji || '📘');
    }
  }, [note]);

  const saveNote = () => {
    const newNote = { id: note ? note.id : Date.now(), title, content, emoji };
    setNotes((prevNotes) => {
      if (note) {
        return prevNotes.map((n) => (n.id === note.id ? newNote : n));
      }
      return [...prevNotes, newNote];
    });
    navigation.goBack();
  };

  const emojiOptions = ['📘', '📙', '📗', '📕', '⭐', '❤️', '🎉', '🌟', '🍎', '✏️', '💻', '🎮'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note ? 'Edit Note' : 'New Note'}</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        style={[styles.input, styles.contentInput]}
        multiline
      />
      <Text style={styles.label}>Choose an Emoji:</Text>
      <ScrollView horizontal style={styles.emojiContainer}>
        {emojiOptions.map((e, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.emojiButton, emoji === e && styles.selectedEmoji]}
            onPress={() => setEmoji(e)}
          >
            <Text style={styles.emojiText}>{e}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={saveNote}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
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
  contentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  emojiContainer: {
    marginBottom: 20,
  },
  emojiButton: {
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedEmoji: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  emojiText: {
    fontSize: 24,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});