import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ShopCar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30,color:'red'}}>购物车</Text>
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