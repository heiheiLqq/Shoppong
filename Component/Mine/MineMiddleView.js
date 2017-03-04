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
  TouchableOpacity
} from 'react-native';

import MiddleData from './MiddleData.json'

export default class MineMiddleView extends Component {
  render() {
      return (
          <View style={styles.container}>
              {this.renderAllItem()}
          </View>
      );
  }

  renderAllItem(){
    return (
      MiddleData.map(function(index, elem) {
        return (
          <InnerView key={elem} iconName={index.iconName} title={index.title}/>
        );
      })

    );
  }
}

class InnerView extends Component {

    static defaultProps = {
      iconName: '',
      title:''
    };
    static propTypes = {
      iconName: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,

    };
    render(){
       return(
         <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('0')}}>
           <View style={styles.innerViewStyle}>
               <Image source={{uri: this.props.iconName}} style={{width:40, height:30, marginBottom:3}}/>
               <Text style={{color:'gray'}}>{this.props.title}</Text>
           </View>
         </TouchableOpacity>
       );
    }
}

const styles = StyleSheet.create({
  container: {
      // 设置主轴的方向
      flexDirection:'row',
      alignItems: 'center',
      backgroundColor: 'white',
      // 设置主轴的对齐方式
      justifyContent:'space-around'
  },

  innerViewStyle:{
      width:70,
      height:70,

      // 水平和垂直居中
      justifyContent:'center',
      alignItems:'center'
  }
});
