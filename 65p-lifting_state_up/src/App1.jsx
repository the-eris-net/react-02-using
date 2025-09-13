import { useState } from 'react';

function App() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const [count, setCount] = useState(0);

  function handleLikeClick() {
    let newLike = like + 1;
    setLike(newLike);
    setCount(newLike - disLike);
  }
  
  function handleDisLikeClick() {
    let newDisLike = disLike + 1;
    setDisLike(newDisLike);
    setCount(like - newDisLike);
  }

  return (
    <div>
        <p> 호감지수 : {count}</p>
        <button onClick={handleLikeClick}>좋아요 : {like}</button>&nbsp;
        <button onClick={handleDisLikeClick}>싫어요 : {disLike}</button>
    </div>
  );
}

export default App;
