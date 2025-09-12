import { useState } from 'react';

const NAVIGATION_ITEM = [
  { icon: 1, name: '홈' },
  { icon: 2, name: '검색' },
  { icon: 3, name: '탐색 탭' },
  { icon: 4, name: '릴스' },
  { icon: 5, name: '메시지' },
  { icon: 6, name: '알림' },
  { icon: 7, name: '만들기' },
  { icon: 8, name: '프로필' },
];

const FEED_ITEM = [
  { user: '한지우', content: '새 포켓몬 게임 출시' },
  { user: '사토시', content: '반드시 가야할 일본 여행지' },
  { user: '애시', content: '사육사 자식 또 이렇게 해놨네' },
];


function Navigation(props){
  return (
    <nav style={{ marginRight: 50 }}>
      <h3>인스타그램</h3>
      <ul style={{ padding: 0 }}>
        {props.items.map((navigationItem, key) => (
          <li key={key} style={{ listStyle: 'none', marginBottom: 10 }}>
            <strong>{navigationItem.icon}</strong>
            <span>{navigationItem.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Navigation items={NAVIGATION_ITEM} />
      <main>
        ...
      </main>
    </div>
  );
}

export default App;
