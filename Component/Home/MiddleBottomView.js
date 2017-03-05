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
  View
} from 'react-native';
// 导入外部的json数据
import Home_D4 from '../../LocalData/XMG_Home_D4.json'

// 引入外部的组件类
import CommonView from'./MiddleCommonView.js'
export default class MiddleBottomView extends Component {

  static defaultProps = {
    popTopHome: null

  };
  render() {
      return (
          <View style={styles.container}>
                  {/*上部分*/}
                  <View style={styles.topViewStyle}>

                  </View>
                  {/*下部分*/}
                  <View style={styles.bottomViewStyle}>
                      {this.renderBottomItem()}
                  </View>
          </View>
      );
  }

  // 下部分的所有子组件
  renderBottomItem(){
    
    var self = this;
    return (
      Home_D4.data.map(function(index, elem) {
        return (
          <CommonView
              title={index.maintitle}
              subTitle={index.deputytitle}
              rightIcon={self.dealWithImgUrl(index.imageurl)}
              titleColor={index.typeface_color}
              tplurl={index.tplurl}
              key={elem}
              callBackClickCell={(data)=>this.popToTopView(data)}
          />
        );
      })
    )
  }

  // 继续往父级界面传递数据
  popToTopView(data){
     // 继续执行回调函数
     this.props.popTopHome(data);
  }

  // 处理图像的尺寸
  dealWithImgUrl(url){
     if (url.search('w.h') == -1){ // 没有找到,正常返回
         return url;
     }else{
         return url.replace('w.h', '120.90');
     }
  }
}

const styles = StyleSheet.create({
  container: {
      marginTop:15
  },

  topViewStyle:{

  },

  bottomViewStyle:{
     // 设置主轴的方向
     flexDirection:'row',
     flexWrap:'wrap'
  }
});
