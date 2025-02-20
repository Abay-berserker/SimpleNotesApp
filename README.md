# Simple Notes App

## Overview
"Simple Notes" is a cross-platform note-taking application built with React Native and Expo. It allows users to:
- Create notes with a title, content, and an emoji.
- View a list of notes.
- Edit and delete existing notes.
- Store notes locally using AsyncStorage for persistence between app restarts.
- Log in with a username and password.

This project was developed as a learning exercise, implementing basic CRUD operations with a modern UI.

## Technologies
- **React Native** with **Expo** for cross-platform development.
- **React Navigation** for screen navigation.
- **AsyncStorage** for local data storage.

## Features
- **Login Screen**: Authenticate with username `user` and password `pass123`.
- **Home Screen**: Displays a list of notes as cards with emojis.
- **Create/Edit Note**: Add or modify notes with a title, content, and a selection of 30+ emojis (e.g., 📘, 💻, ⭐).
- **Note Details**: View, edit, or delete individual notes.
- **Persistent Storage**: Notes are saved locally and persist across app restarts.
- **Logout**: Option to return to the login screen.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- Git installed ([git-scm.com](https://git-scm.com/)).
- Expo CLI: Install globally with `npm install -g expo-cli`.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/SimpleNotesApp.git
   cd SimpleNotesApp#   S i m p l e N o t e s A p p  
 