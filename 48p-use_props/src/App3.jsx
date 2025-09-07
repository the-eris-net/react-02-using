import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: '홍길동',
    money: 20000,
    age: 20,
  });

  const decreaseMoney = () => {
    user.money -= 1000;
    setUser(user);
    console.log(user);
  };

  const increaseAge = () => {
    user.age += 1;
    setUser(structuredClone(user));
    console.log(user);
  };

  return (
    <div>
      <h3>사용자 프로필</h3>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
      <p>소유 금액: {user.money}</p>
      <button onClick={increaseAge}>나이 증가</button>
      <button onClick={decreaseMoney}>금액 감소</button>
    </div>
  );
}

export default App;
