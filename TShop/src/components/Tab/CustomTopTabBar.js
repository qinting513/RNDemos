import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { MaterialTopTabBar } from "react-navigation-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import {withNavigation} from 'react-navigation';

class CustomTopTabBar extends React.Component {
  render() {
    return (
      <View style={{position:'relative', backgroundColor:'#fff', borderBottomColor:'#e8e8e8',borderBottomWidth:1}}>
        {/* 左右都可以自定义 */}
        {/* <TouchableOpacity style={{position:'absolute', left:12, bottom: 10}}>
              <Ionicons  name={'ios-arrow-back'}
                   size={22}
                   color={'#666666'}
              />
        </TouchableOpacity> */}
        {/* 写法固定，表示从父组件传过来的属性  <CustomTopTabBar {...props} /> 刚才定义的品牌、品类的样式依然有效*/}
        <MaterialTopTabBar {...this.props} />
        <TouchableOpacity 
              onPress={()=>this.props.navigation.navigate('Search', {'Id':111, 'name':'Jacky'})}
              style={{position:'absolute', right:12, bottom: 10}}>
              <Ionicons  name={'ios-search'}
                   size={22}
                   color={'#666666'}
              />
        </TouchableOpacity>
      </View>
    );
  }
}

// 用withNavigation包装出去 使得this.props的navigation有值
export default withNavigation(CustomTopTabBar);