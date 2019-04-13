import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Mine extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30,color:'red'}}>我的</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
})