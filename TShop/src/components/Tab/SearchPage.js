import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Category extends React.Component {

  render() {
    const Id = this.props.navigation.getParam('Id', 0);
    const name = this.props.navigation.getParam('name', '没有值的时候的默认值');
    return (
      <View style={styles.container}>
          <Text style={{fontSize:20, color:'black', margin:10}}>搜索</Text>
          <Text>传递过来的参数 Id:{Id}   name:{name}</Text>
          <Button style={{fontSize:20, color:'black', margin:10}}
                  onPress={()=>this.props.navigation.popToTop()}
                  title='Go back'
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' ,
        backgroundColor:'#e8e8e8'
    }
})