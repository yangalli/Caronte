import React from 'react';
import { View, Text } from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default props => (
  <View>
    <Text>Caronte</Text>
    <TabBar {...props} />
  </View>
)
