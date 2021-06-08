import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/demo/Hello';
import RouterComp from './router/index';

// 主渲染函数
const render = (Component) => {
  ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.querySelector('#app'),
  );
};

// 渲染挂载
render(RouterComp);
