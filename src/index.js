/*
入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'
//引入所有样式：不采用这种方式
// import 'antd/dist/antd.css

//引入自定义模块
import App from './App'
import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'

// 读取local中保存user, 保存到内存中
const user = storageUtils.getUser()
memoryUtils.user = user


// 将App组件标签渲染到index页面的div上
ReactDOM.render(<App />, document.getElementById('root'))
