import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import SplashPage from './src/components/Tab/SplashPage';
import HomeView from './src/components/Tab/Home';
import CategoryView from './src/components/Tab/Category';
import ShopCarView from './src/components/Tab/ShopCar';
import MineView from './src/components/Tab/Mine';
import GlobalValue from './src/components/config/global';
import BrandPageView from './src/components/Tab/BrandPage';
import CustomTopTabBar from './src/components/Tab/CustomTopTabBar'
import SearchView from './src/components/Tab/SearchPage';

import Icon from 'react-native-vector-icons/dist/Ionicons';

const CategoryTab = createMaterialTopTabNavigator(
    {
        CategoryPage: {
            screen: CategoryView,
            navigationOptions: {
                tabBarLabel: '品类'
            }
        },
        BrandPage: {
            screen: BrandPageView,
            navigationOptions: {
                tabBarLabel: '品牌'
            }
        }
    },
    {
        swipeEnabled: true,
        animationEnabled: true, // 切换页面时显示动画
        backBehavior: 'none', // 只有安卓有用，当点击第二个页面时，点击物理返回键是否回到刚才的第一个页面，否则直接退出
        tabBarOptions: {
            labelStyle: { // tabBar label的style
                // marginTop: 2
            },
            // tabBar的样式
            style: {
                height: GlobalValue.actionBar.height + GlobalValue.barContentPad,
                marginHorizontal: GlobalValue.screenWidth / 6,
                paddingTop: GlobalValue.barContentPad,
                backgroundColor: '#fff',
            },
            tabStyle: {
                width: GlobalValue.screenWidth * 1 / 3,
            },
            // label 和 icon的背景色 活跃时
            activeBackgroundColor: '#fff',
            activeTintColor: GlobalValue.primaryColor,

            inactiveBackgroundColor:'#fff',
            inactiveTintColor:GlobalValue.lightBlack,
            showLabel: true,
            showIcon:false,
            pressOpacity: 0.3, // 选项卡的透明度 < 0.5
            indicatorStyle: { //下划线样式
                height:2,
                width: GlobalValue.screenWidth / 9,
                backgroundColor: GlobalValue.primaryColor,
                left: GlobalValue.screenWidth / 9,
            }
        },
        // 自定义顶部Tabbar
        tabBarComponent:(props) => (
            <CustomTopTabBar {...props} />
        )
    }
     
)

//最简单的tab
// const MyTab = createBottomTabNavigator({
//     Home: HomeView,
//     Category: CategoryView,
// });

const MyTab = createBottomTabNavigator(
    {
        Home: {
            screen: HomeView,
            navigationOptions: {
                header: null,
                tabBarLabel: '首页',
                tabBarIcon: ( (focused, tintColor) => (
                    <Icon name={`ios-home${focused ? '' : '-outline'}`} size={25} color={tintColor} />
                ))
            }
        },
        Category: {
            screen: CategoryTab,
            navigationOptions: {
                header: null,
                tabBarLabel: '分类',
                tabBarIcon: ( (focused, tintColor) => (
                    // <Image source={require('./src/images/icon_tabbar_merchant_normal.png')} style={{width:30,height:30}} />
                    <Icon name={`ios-apps${focused ? '' : '-outline'}`} size={25} color={tintColor} />
                ))
            }
        },
        ShopCar: {
            screen: ShopCarView,
            navigationOptions: {
                header: null,
                tabBarLabel: '购物车',
                tabBarIcon: ( (focused, tintColor) => (
                    <Icon name={`ios-cart${focused ? '' : '-outline'}`} size={25} color={tintColor} />
                ))
            }
        },
        Mine: {
            screen: MineView,
            navigationOptions: {
                header: null,
                tabBarLabel: '我的',
                tabBarIcon: ( (focused, tintColor) => (
                    <Icon name={`ios-person${focused ? '' : '-outline'}`} size={25} color={tintColor} />
                ))
            }
        }
    },
    {
        swipeEnabled: true, 
        tabBarOptions: {
            //TODO: 为啥只有文字改变 图片没有变红
            activeTintColor: GlobalValue.primaryColor,
            inactiveTintColor: GlobalValue.lightBlack,
        }
    }
);

const RootStack = createStackNavigator(
    {
        SplashPage: {
            screen: SplashPage,
            navigationOptions:{
                gesturesEnabled: true,
                header: null // 去掉react-navigation提供的标题
            }
        },
        MyTab: {
            screen: MyTab,
            navigationOptions:{
                gesturesEnabled: true,
                header: null // 去掉react-navigation提供的标题
            }
        },
        Search: {
            screen: SearchView,
            navigationOptions:{
                gesturesEnabled: true,
                header:null
            }
        }
    },
    {
        initialRouteName: 'SplashPage'
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render(){
        return <AppContainer />
    }
}