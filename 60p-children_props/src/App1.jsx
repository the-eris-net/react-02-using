import { useState } from 'react';

function App() {
  return (
    <>
      <div
        style={{border: '1px solid gray',
          borderRadius: '8px',
          padding: '10px',
        }}>
        <h2>서류 제출 마감 기한</h2>
        <div>
          <input type="date" defaultValue="2025-09-15" />
        </div>
      </div>
      <div
        style={{
          border: '1px solid gray',
          borderRadius: '8px',
          padding: '10px',
        }}>
        <h2>스터디 준비</h2>
        <div>
          <ul>
            <li>영어 공부</li>
            <li>수학 공부</li>
            <li>국어 공부</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
