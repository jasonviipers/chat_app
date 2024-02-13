import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from '@/components/Themed';
import chats from '../../data/chats.json';
import { Chat } from '@/components/chats/Chat';

export default function Chats() {
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <Chat user={item.user}
          size={50} lastMessage={{
            id: '1',
            user: {
              id: 'u2',
              name: 'johndoe',
              image: 'https://img.freepik.com/free-photo/3d-illustration-cartoon-character-with-glasses-coat_1142-32448.jpg?t=st=1707486879~exp=1707490479~hmac=fe872ba58ce4b3f79a6deb073e410e435b7946a41e7526e068dd4f8468ffdf44&w=826',
              status: "Online"
            },
            content: 'Well done this sprint, guys!',
            createdAt: '2024-01-17T19:48:00.000Z'
          }}/>
        )}
        inverted
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
