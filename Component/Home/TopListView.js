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
  ListView,
  TouchableOpacity,
  Platform,
  Dimensions
} from 'react-native';
var {width} = Dimensions.get('window');

// 全局的变量
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70: 60;
var cellH = 70;
var vMargin = (width - cellW * cols) / (cols + 1);
export default class TopListView extends Component {

  static defaultProps = {
      dataArr: [],  // 标题

  };
  // static propTypes = {
  //   dataArr: React.PropTypes.objece.isRequired,
  // };


  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});

    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataArr)
    };
  }
  render() {
      return (
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              contentContainerStyle={styles.contentViewStyle}
              scrollEnabled={false}
          />
      );
  }

  // 具体的cell
  renderRow(rowdata){
      return(
        <TouchableOpacity style={styles.cellStyle} onPress={()=>{alert('0')}}>

              <Image source={{uri: rowdata.image}} style={{width:52, height:52}}/>
              <Text style={styles.titleStyle}>{rowdata.title}</Text>

        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  contentViewStyle:{
      // 设置主轴的方向
      flexDirection:'row',
      // 多个cell在同一行显示
      flexWrap:'wrap',
      // 宽度
      width:width
  },

  cellStyle:{
      // backgroundColor:'red',
      width:cellW,
      height:cellH,
      // 水平居中和垂直居中
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
      marginLeft:vMargin
  },

  titleStyle:{
      fontSize:Platform.OS == 'ios' ? 13 : 11,
      color:'gray'
  }

});
