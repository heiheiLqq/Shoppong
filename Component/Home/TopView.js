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
  ScrollView,
  ListView,
  Image,
  Dimensions
} from 'react-native';

var {width} = Dimensions.get('window');

// 引入外部的json数据
import TopMenu from '../../LocalData/TopMenu.json';

// 引入外部的组件
import TopListView from './TopListView';

export default class TopView extends Component {
  constructor(props) {
    super(props);
    this.onScrollAnimationEnd = this.onScrollAnimationEnd.bind(this);

    this.state = {
      activePage: 0
    };
  }

  render() {
      return (
          <View style={styles.container}>
              {/*内容部分*/}
              <ScrollView
                  horizontal={true}
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  onMomentumScrollEnd = {this.onScrollAnimationEnd}
              >
                  {this.renderScrollItem()}
              </ScrollView>
              {/*页码部分*/}
              <View style={styles.indicatorViewStyle}>
                  {this.renderIndicator()}
              </View>
          </View>
      );
  }

  // 当一帧滚动结束的时候调用
  onScrollAnimationEnd(e){
      // 求出当前的页码
      var currentPage = Math.floor(parseInt(e.nativeEvent.contentOffset.x) / parseInt(width));

      // 更新状态机
      this.setState({
          activePage: currentPage
      });

  }

  // scrollView内部的组件
  renderScrollItem(){

      var dataArr = TopMenu.data;
      return (
        dataArr.map(function(index, elem) {
          return (
            <TopListView key={elem}
                dataArr={index}
            />
          );
        })
      );
  }


  // 页码(指示器)
  renderIndicator(){
      
      var dataArr = TopMenu.data;
      var style;
      var self = this;
      return (
        dataArr.map(function(index, elem) {
          style = (elem === self.state.activePage) ? {color:'orange'} :  {color:'gray'}
          return (
             <Text key={elem} style={[{fontSize:25}, style]}>&bull;</Text>
          );
        })
      );

  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor:'white',
  },

  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },

  indicatorViewStyle:{
     // 改变主轴的方向
      flexDirection:'row',
     // 水平居中
      justifyContent:'center'
  }
});
