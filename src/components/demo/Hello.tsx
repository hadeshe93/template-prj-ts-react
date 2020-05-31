import React from 'react';

interface Gretting {
  name: string
}

// 无状态组件
const Hello = (props: Gretting) => {
  return <h1>Hello, { props.name }</h1>
}

export default Hello;