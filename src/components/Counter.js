import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('counter') // counter store를 props로 전달받아서 사용
// @inject(stores => ({ // 특정 값만 받아오는 것도 가능
//   number: stores.counter.number,
//   increase: stores.counter.increase,
//   decrease: stores.counter.decrease,
// }))
@observer
class Counter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>{counter.number}</h1>
        <button onClick={counter.increase}>+1</button>
        <button onClick={counter.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;