/**
* ` this.props.navigation.navigate('RouteName') `将新路由推送到堆栈导航器，如果它尚未在堆栈中，则跳转到该页面。</br>
* 我们可以多次调用` this.props.navigation.push('RouteName') `，并且它会继续推送路由。</br>
* 标题栏会自动显示返回按钮，但你可以通过调用` this.props.navigation.goBack() `以编程方式返回。 在Android上，硬件返回按钮会按预期工作。</br>
* 您可以使用` this.props.navigation.navigate('RouteName') `返回堆栈中的现有页面，你可以使用` this.props.navigation.popToTop() `返回堆栈中的第一个页面。</br>
* ` navigation ` prop适用于所有屏幕组件（组件定义为路由配置中的屏幕，并且被 React Navigation 渲染为路由）。</br>
*  参考： https://reactnavigation.org/docs/zh-Hans/navigation-prop.html
*/

import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Navigate to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
           <Button
                title="Push to Details"
                onPress={() => this.props.navigation.push('Details')}
            />
        </View>
      );
    }
  }

  class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
                title="Go to Details... again"
                onPress={() => this.props.navigation.push('Details')}
            />
            <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
                title="Go back"
                onPress={() => this.props.navigation.goBack()}
            />
            <Button
                title="Pop"
                onPress={() => this.props.navigation.pop()}
            />
            <Button
                title="Pop To Top"
                onPress={() => this.props.navigation.popToTop()}
            />
        </View>
      );
    }
  }

const RootStack = createStackNavigator(
    // {
    //     Home: HomeScreen,
    //     Details:DetailsScreen
    // },
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Home'
    }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
    render(){
        return <AppContainer />
    }
}