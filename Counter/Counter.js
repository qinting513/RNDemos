import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class Counter extends Component {
     constructor(props){
         super(props);
         // 如果传进来的initValue 没有值 则默认用0
         this.state = {
             inputValue: this.props.initValue || 0
         };
         // ES6语法 要绑定this，update方法里的this才会指向这个实例
         this._update= this._update.bind(this);
     }

     static defaultProps = {
         initValue: 0,
         onUpdate: f => f //默认是一个什么都不做都函数
     }

     render(){
         return(
             <View style={[this.props.style, styles.container]}>
                  {/* 减号部分 */}
                  <TouchableOpacity  activeOpacity={0.2}
                       onPress={this._reduce.bind(this)}>
                       <View style={styles.reduceView}>
                            <Text allowFontScaling={false} style={styles.reduceBtn}>-</Text>
                       </View>
                  </TouchableOpacity>
                  <View style={styles.inputBox}>
                     <TextInput  style={styles.textInput}
                                 returnKeyType='done'
                                 maxLength={3}
                                 onEndEditing={this._checkNumber.bind(this)}
                                 value={this.state.inputValue.toString()}
                                 keyboardType='numeric'
                                 onChangeText={(txt)=>this._update(Number(txt))}
                                 autoFocus={false}
                                 underlineColorAndroid='transparent'
                     />
                  </View>

                 {/* 加号部分 */}
                  <TouchableOpacity  activeOpacity={0.2}
                       onPress={this._plus.bind(this)}>
                       <View style={styles.plusView}>
                            <Text allowFontScaling={false} style={styles.plusBtn}>+</Text>
                       </View>
                  </TouchableOpacity>

             </View>
         );
     };
     // 结束编辑的时候判断合法性
     _checkNumber(){
        let value = this.state.inputValue;
        // console.log(value);
        if(value === '' || value < 1){
            value = 0;
        } else {
            value = Math.floor(value);
        }
        this._update(value);
     };
     _reduce(){
        let value = this.state.inputValue - 1;
        if (value < 1) {
            value = 0;
        }
        this._update(value);
     };

     _plus(){
        this._update(this.state.inputValue + 1);
     };
     _update(value){
         // 调用父组件的onUpdate方法，将值传递到父组件
         this.props.onUpdate(this.state.inputValue, value);
         this.setState({
            inputValue: value
         });
     }
}

// 对外属性声明(注意声明部分不能放在export default class Counter的前面，否则报找不到Counter的错误)  
// PropTypes.number.isRequired表示必须传这个值，使用isRequired则不需要设置defaultProps
Counter.propTypes = {
    initValue: PropTypes.number,
    style: PropTypes.object,
    onUpdate: PropTypes.func
}

const styles = StyleSheet.create({
    container:{
        width: 120,
        height: 35,
        flexDirection: 'row',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        overflow:'hidden'
    },
    reduceView:{
         width:34,
         height:34,
         borderRightColor: '#ddd',
         borderRightWidth:1,
         justifyContent: 'center',
         alignItems:'center'
    },
    reduceBtn:{
       fontSize:18,
       textAlign:'center',
       backgroundColor: 'transparent',
    },
    inputBox:{
        flex:1,
        borderRightColor: '#ddd',
        borderRightWidth:1,
    },
    textInput:{
         flex:1,
         backgroundColor:'transparent',
         padding: 0,
         fontSize:14,
         textAlign:'center'
    },
    plusView:{
        width:34,
        height:34,
        justifyContent: 'center',
        alignItems:'center'
    },
    plusBtn:{
        fontSize:18,
        textAlign:'center',
        backgroundColor: 'transparent',
    }
});

/** 
 *  1.组件的封装
 *    属性props 对外开放(PropTypes的使用)
 *    状态state 对外封闭
 * 
*/