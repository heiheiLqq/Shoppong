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
  TouchableOpacity,
  Dimensions
} from 'react-native';

var {width} = Dimensions.get('window');


// 引入外部的组件类
import CommonView  from './MiddleCommonView'

// 引入外部数据
import TopMiddleData from'../../LocalData/HomeTopMiddleLeft.json'

export default class HomeMiddleView extends Component {
  render() {
      return (
          <View style={styles.container}>
              {/*左边*/}
              {this.renderLeftView()}
              {/*右边*/}
              <View>
               {this.renderRightView()}
              </View>
          </View>
      );
  }

  // 左边的View
  renderLeftView(){
      // 拿到对应的数据
      var data = TopMiddleData.dataLeft[0];

      return(
        <TouchableOpacity onPress={()=>{alert('0')}}>
          <View style={styles.leftViewStyle}>
             <Image source={{uri:data.img1}} style={styles.leftImageStyle}/>
             <Image source={{uri:data.img2}} style={styles.leftImageStyle} />
             <Text style={{color:'gray'}}>{data.title}</Text>
             <View style={{flexDirection:'row', marginTop:5}}>
                 <Text style={{color: 'blue', marginRight:5}}>{data.price}</Text>
                 <Text style={{color: 'orange', backgroundColor:'yellow'}}>{data.sale}</Text>
             </View>
          </View>
        </TouchableOpacity>
      );
  }

  // 右边的View
  renderRightView(){
      
      var rightData = TopMiddleData.dataRight;

      return (
        rightData.map(function(index, elem) {
          return (
            <CommonView
                title={index.title}
                subTitle={index.subTitle}
                rightIcon={index.rightImage}
                titleColor={index.titleColor}
                key={elem}
            />
          );
        })
      );
  }
}

const styles = StyleSheet.create({
  container: {
      marginTop:15,
      // 改变主轴的方向
      flexDirection:'row'
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },

  leftViewStyle:{
      width:width * 0.5,
      height:119,
      backgroundColor:'white',
      marginRight:1,

      // 水平居中
      alignItems:'center',
      justifyContent:'center'
  },

  leftImageStyle:{
      width:120,
      height:30,

      // 内容模式
      resizeMode:'contain'
  }
});
