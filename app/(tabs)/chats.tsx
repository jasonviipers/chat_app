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
          size={50} lastMessage={item.lastMessage as any} />
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
