import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>首页</Text>
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