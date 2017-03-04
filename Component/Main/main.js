/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  Platform
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Home from '../Home/home'
import Shop from '../Shop/shop'
import Mine from '../Mine/mine'
import More from '../More/more'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab : 'home'
    };
  }

  render() {
    return (
      <TabNavigator>
        {
          this.renderTabbarItem('首页','home','icon_tabbar_homepage','icon_tabbar_homepage_selected','home',Home)
        }
        {
          this.renderTabbarItem('购物','shop','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop',Shop)
        }
        {
          this.renderTabbarItem('我的','mine','icon_tabbar_mine','icon_tabbar_mine_selected','mine',Mine)
        }
        {
          this.renderTabbarItem('更多','more','icon_tabbar_misc','icon_tabbar_misc_selected','more',More)
        }
      </TabNavigator>
    );
  }

  renderTabbarItem(itemTitle,itemsSelectedTab,itemIconNormal,itemIconSelected,itemViewName,itemComponent){
    return(
      <TabNavigator.Item
        selected={this.state.selectedTab === itemsSelectedTab}
        onPress={() => this.setState({ selectedTab: itemsSelectedTab })}
        title = {itemTitle}
        selectedTitleStyle = {styles.selectedTitleStyle}
        renderIcon={() => <Image source={{uri:itemIconNormal}} style = {styles.iconStyle} />}
        renderSelectedIcon={() => <Image source={{uri:itemIconSelected}} style = {styles.iconStyle} />}>
        <Navigator
          initialRoute = {{ name: itemViewName, component: itemComponent }}
          configureScene = {(route) => {
            return Navigator.SceneConfigs.FloatFromRight ;
          }}
          renderScene = {(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator = {navigator} />
          }} />
      </TabNavigator.Item>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  iconStyle:{
    width:Platform.OS === 'ios'?30:25,
    height:25,
  },
  selectedTitleStyle:{
    color:'orange',
  }
});
