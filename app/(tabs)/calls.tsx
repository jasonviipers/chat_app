import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Call } from '@/components/Calls/Call';

const calls = [
  {
    id: '1',
    user: {
      id: 'u1',
      name: 'Vadim',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      status: "Online"
    },
    call: {
      id: '1',
      user: {
        id: 'u2',
        name: 'johndoe',
        image: 'https://img.freepik.com/free-photo/3d-illustration-cartoon-character-with-glasses-coat_1142-32448.jpg?t=st=1707486879~exp=1707490479~hmac=fe872ba58ce4b3f79a6deb073e410e435b7946a41e7526e068dd4f8468ffdf44&w=826',
        status: "Online"
      },
      content: 'Well done this sprint, guys!',
      createdAt: '2024-01-17T19:48:00.000Z'
    }
  },
  {
    id: '2',
    user: {
      id: 'u3',
      name: 'Lukas',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
      status: "Offline"
    },
    call: {
      id: '2',
      user: {
        id: 'u4',
        name: 'Daniil',
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
        status: "Offline"
      },
      content: 'What are you up to?',
      createdAt: '2024-01-17T19:48:00.000Z'
    }
  },
  {
    id: '3',
    user: {
      id: 'u5',
      name: 'Alex',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
      status: "Online"
    },
    call: {
      id: '3',
      user: {
        id: 'u6',
        name: 'Vlad',
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.jpg',
        status: "Offline"
      },
      content: 'How about a game of chess?',
      createdAt: '2024-01-17T19:48:00.000Z'
    }
  },
];

export default function CallScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={calls}
        renderItem={({ item }) => (
          <Call user={{
            id: '',
            name: '',
            image: '',
            status: undefined
          }} lastCall={{
            id: '',
            user: {
              id: '',
              name: '',
              image: '',
              status: undefined
            },
            content: '',
            createdAt: ''
          }} size={0} />
        )}
        inverted
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
