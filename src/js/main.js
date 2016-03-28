//引入CSS
require('../css/master.scss');

//引入系统模块
var React = require('react');
var ReactDOM = require('react-dom');

//引入自定义组件
var Hello = require('./components/Hello.js');

//渲染
ReactDOM.render(
	<Hello title="你好！世界！" />,
	document.getElementById('app')
)