import React from "react";
import Greetings from "./Greeting";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="hk" onClick={onClick} />;
  // 필요한 props 를 빠뜨리게 된다면  에디터에 오류가 나타난다.
};

export default App;
