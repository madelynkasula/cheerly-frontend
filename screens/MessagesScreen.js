import React from 'react';
import { View, Text } from 'react-native';

export default class MessagesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Messages</Text>
      </View>
    );
  }
}