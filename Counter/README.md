
*  1.组件的封装 主要看Counter.js
*    属性props 对外开放(一经指定不再修改、PropTypes的使用)
*    状态state 对外封闭（组件内部记录组件状态）


Props(属性):    Props一般用于自定义组件，大多数组件在创建时就可以使用各种参数来进行定制，用于定制的这些参数就称为props（属性）。例如：<Room name="小哥" />   //name:就是Props，通过this.props.name访问
注意：props是在父组件中指定，而且一经指定，在整个组件的生命周期中都不再改变。

State：如果以后想修改某个属性就修改界面，就需要用state。
注意:State属性一般在constructor中声明(ES6)，在setState中修改数据.
// 构造方法
constructor(props){
super(props);

// 定义state属性
this.state = {
num:1,
};
}

this.setState({
    num : number
})

