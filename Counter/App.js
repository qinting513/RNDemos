/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Counter from './Counter';

export default class App extends Component {
   constructor(props){
     super(props);
     this.initValues = [0,0,0];
    //  求和
     const initSum = this.initValues.reduce( (a, b) => a+b, 0 );
     this.state = {
       sum: initSum
     };
     this.onUpdate = this.onUpdate.bind(this);
   }

  render() {
    return (
      <View style={styles.container}>
           <Text style={{margin:10,fontSize:20,color:'black'}}>总计:{this.state.sum}</Text>
           <Counter style={{margin:10}} onUpdate={this.onUpdate} initValue={this.initValues[0]}/>
           <Counter style={{margin:10}} onUpdate={this.onUpdate} initValue={this.initValues[1]}/>
           <Counter style={{margin:10}} onUpdate={this.onUpdate} initValue={this.initValues[2]}/>
      </View>
    );
  };

  onUpdate(oldValue, newValue){
    const valueChange = newValue - oldValue;
    this.setState({ //改变的值加上总计的值
      sum:valueChange+this.state.sum
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
