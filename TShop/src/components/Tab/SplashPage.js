import React from 'react';
import { Text, View, Image } from 'react-native';

import global from '../config/global'

export default class SplashPage extends React.Component {

  render() {
    return (
      <Image style={{width:global.screenWidth, height:global.screenHeight}}
         source={require('../../images/LaunchImage.png')}
         resizeMode='cover'
       />
    );
  };

  componentDidMount(){
      this.timer = setTimeout(() => {
        //   如果用push右滑 又可以回到此页面
        //   this.props.navigation.push('Home');
          this.props.navigation.replace('MyTab');
          this.timer && clearTimeout(this.timer)
      }, 1000);
  }
}