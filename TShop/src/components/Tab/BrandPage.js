import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class BrandPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20, color:'black', margin:10}}>品牌</Text>
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