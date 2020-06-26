import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  // useState를 사용 할 때 Generics 를 사용하지 않아도 알아서 타입을 유추하기 때문에 생략해도 상관없다.
  // useState 를 사용 할 때 어떤 상황에 Generics 를 사용하는게 좋을까?
  // 1.상태가 null일 수도 있고 아닐수도 있을때
  // 2.상태의 타입이 까다로운 구조를 가진 객체이거나 배열일 때
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
