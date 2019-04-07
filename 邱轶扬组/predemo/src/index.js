import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Tick from './1.元素渲染/Tick';
import Comment from './2.组件&Props/Comment';
import Clock from './3.State&生命周期/Clock';
import Toggle from './4.事件处理/Toggle';
import Page from './5.条件渲染/Warn';
import Blog from './6.列表&Keys/Blog';
import Reservation from './7.表单/Reservation';
import Calculator from "./8.状态提升/Calculator";
import SignUpDialog from './9.组合&继承/SignUpDialog';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(<Tick/>, document.getElementById('root'));
// ReactDOM.render(<Comment date={comment.date} text={comment.text}
//                          author={comment.author}/>, document.getElementById('root'));
// ReactDOM.render(<Clock/>, document.getElementById('root'));
// ReactDOM.render(<Toggle/>, document.getElementById('root'));
// ReactDOM.render(<Page/>, document.getElementById('root'));
// ReactDOM.render(<Blog posts={posts}/>, document.getElementById('root'));
// ReactDOM.render(<Reservation/>, document.getElementById('root'));
// ReactDOM.render(<Calculator />, document.getElementById('root'));
// ReactDOM.render(<SignUpDialog/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
