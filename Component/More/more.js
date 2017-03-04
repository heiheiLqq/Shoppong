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
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView
} from 'react-native';

var {screenHeight, screenWidth} = Dimensions.get('window');

import Cell from './MoreCell'

export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/**导航栏**/}
        {this.renderNavView()}
        <ScrollView>
           <View style={{marginTop:20}}>
               <Cell
                  title="扫一扫"
               />
           </View>

           <View style={{marginTop:20}}>
                <Cell
                    title="省流量模式"
                    isSwitch={true}
                />
                <Cell
                   title="消息提醒"
                />
                <Cell
                   title="邀请好友使用码团"
                />
                <Cell
                   title="清空缓存"
                   rightTitle="1.99M"
                />
           </View>

            <View style={{marginTop:20}}>
                <Cell
                    title="问卷调查"
                />
                <Cell
                    title="支付帮助"
                />
                <Cell
                    title="网络诊断"
                />
                <Cell
                    title="关于码团"
                />
                <Cell
                    title="我要应聘"
                />
            </View>

            <View style={{marginTop:20}}>
                <Cell
                    title="精品应用"
                />
            </View>
        </ScrollView>

      </View>
    );
  }
  //设置导航条
  renderNavView(){
    return(
      <View style = {styles.navView}>
        <Text style={styles.navTitle}>更多</Text>
        <TouchableOpacity style = {styles.navRightView}>
          <Image style = {styles.navRightImage} source = {{uri :'icon_mine_setting'}} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',

  },
  navView:{
    height: Platform.OS == 'ios' ? 64 : 44,
    backgroundColor:'rgba(255,96,0,1.0)',

    // 设置主轴的方向
    flexDirection:'row',
    // 垂直居中 ---> 设置侧轴的对齐方式
    alignItems:'center',
    // 主轴方向居中
    justifyContent:'center'
  },
  navTitle:{
    fontSize:16,
    fontWeight:'bold',
    color:'white',
  },
  navRightView:{
    position:'absolute',
    right:10,
    bottom:Platform.OS == 'ios' ? 15:13
  },
  navRightImage:{
    width:Platform.OS == 'ios' ? 28: 24,
    height:Platform.OS == 'ios' ? 28: 24,
  }


});
