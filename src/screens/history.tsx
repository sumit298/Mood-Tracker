import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const History: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default History;
